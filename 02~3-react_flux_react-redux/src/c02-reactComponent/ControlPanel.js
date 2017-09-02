/**
 * Created by asus on 2017/7/2.
 */
import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a+b, 0);
        this.state = {
            sum: initSum
        };
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange});
    }

    render() {
        console.log('enter ControlPanel render');
        return (
            <div style={style}>
                <Counter onUpdate={this.onCounterUpdate} caption="First" />
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={10} />
                <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={20}/>
                <button onClick={() => this.forceUpdate()}> Click me to re-render! </button>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;