/**
 * Created by asus on 2017/7/4.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {selectVisibleTodos} from '../selector';


const TodoList = ({todos,onClickTodo}) => {
    return (
        <ul className="todo-list">
            {
            todos.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                />
            ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};


const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state) // 监听state.filter的改变，过滤state的todos数组
    };
};



export default connect(mapStateToProps)(TodoList);


