/**
 * Created by asus on 2017/7/4.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected"> {children} </b>
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};
 
const mapStateToProps = (state, ownProps) => { // 监听 state.filter 的改变，与此filter属性(ownProps)对比。
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Link);