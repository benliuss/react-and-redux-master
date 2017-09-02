/**
 * Created by asus on 2017/7/4.
 */
import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

import './style.css';

export default () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    );
}