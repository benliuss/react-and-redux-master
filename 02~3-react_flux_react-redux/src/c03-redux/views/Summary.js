/**
 * Created by asus on 2017/7/3.
 */
/**
 * Created by asus on 2017/7/3.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';


function Summary({value}) {
    return (
        <div>Total Count: {value}</div>
    );
}

Summary.propTypes = {
    sum: PropTypes.number.isRequired
};


function mapStateToProps(state) {
    let sum = 0;
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key];
        }
    }
    return {value: sum};
}

export default connect(mapStateToProps)(Summary);

/*
class SummaryContainer extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return {sum: sum};
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.sum;
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    render() {
        return (
            <Summary sum={this.state.sum}/>
        );
    }
}

export default SummaryContainer;*/
