/**
 * Created by asus on 2017/7/3.
 */
import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import CounterStore from './CounterStore';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';


function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}


const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computeSummary(CounterStore.getCounterValues()); //其他模块可获取当前所有计数器总和
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStore.dispatchToken]); // 若此register函数在CounterStore的register之前执行，就等CounterStore执行完

        SummaryStore.emitChange();
    }
});

export  default SummaryStore;