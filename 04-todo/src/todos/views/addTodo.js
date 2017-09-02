/**
 * Created by asus on 2017/7/4.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js';

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            value: ''
        };
    }

    onInputChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const inputValue = this.state.value;
        if (!inputValue.trim()) {
            return;
        }
        this.props.onAdd(inputValue); //点击add按钮，触发this.props.onAdd(inputValue)
        this.setState({value: ''});
    };

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
                    <button className="add-btn" type="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);


/* 导入创建action的函数addTodo()  <-text
    通过dispatch(action) 传递给 store */