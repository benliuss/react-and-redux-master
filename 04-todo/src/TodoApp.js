/**
 * Created by asus on 2017/7/3.
 */
import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';

function TodoApp() {
    return (
        <div>
            <Filter />
            <Todos />
        </div>
    );
}

export default TodoApp;
