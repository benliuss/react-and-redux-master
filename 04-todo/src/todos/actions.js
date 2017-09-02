/**
 * Created by asus on 2017/7/3.
 */
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 3; /* 不要与initialState中的id重复 */

// 省去return的函数写法
export const addTodo = (text) => ({
    text: text,
    id: nextTodoId ++,
    type: ADD_TODO,
    completed: false
});

export const toggleTodo = (id) => ({
    id: id,
    type: TOGGLE_TODO
});

export const removeTodo = (id) => ({
    id: id,
    type: REMOVE_TODO
});


/* 创建action的函数 */