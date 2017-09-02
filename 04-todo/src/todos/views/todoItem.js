/**
 * Created by asus on 2017/7/4.
 */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions';


class TodoItem extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {onToggle, onRemove, completed, text} = this.props;
        return (
            <li
                className="todo-item"
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed ? "checked" : ""}
                    readOnly
                    onClick={onToggle}
                />
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>×</button>
            </li>
        );
    }
};

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps;
    return {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
};

export default connect(null, mapDispatchToProps)(TodoItem);


/* 导入了bindActionCreators，toggle remove的action创建函数

   并绑定事件 */