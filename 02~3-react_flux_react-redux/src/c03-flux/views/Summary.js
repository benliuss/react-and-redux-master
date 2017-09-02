/**
 * Created by asus on 2017/7/3.
 */
import React, {Component} from 'react';
import SummaryStore from '../stores/SummaryStore.js';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            sum: SummaryStore.getSummary()
        }
    }


    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate);
    }

    componentWillUnMount() {
        SummaryStore.addChangeListener(this.onUpdate);
    }

    onUpdate() {
        this.setState({
            sum: SummaryStore.getSummary()
        })
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        );
    }
}

export default Summary;