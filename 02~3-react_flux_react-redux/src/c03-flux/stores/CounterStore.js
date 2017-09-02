/**
 * Created by asus on 2017/7/3.
 */
import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
};


// 让CounterStore成了EventEmitter对象
const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues; // 其他模块可读取所有当前计数值
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT); // 广播一个特定事件
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback); // 特定事件的处理函数
    },
    removeChangeListener: function (callback) {
        this.removeChangeListener(CHANGE_EVENT, callback); // 删除处理函数
    }
});

/**
 * 将CounterStore注册到全局唯一的Dispatcher
 * 任何派发到Dispatcher的action，都会传递到此回调函数中调用
 * @type {DispatchToken} register()返回值token，用于Store间同步
 */
CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption] --;
        CounterStore.emitChange(); // 触发getCounterValues
    }
});

export default CounterStore;