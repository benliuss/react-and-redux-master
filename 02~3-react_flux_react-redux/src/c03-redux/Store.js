/**
 * Created by asus on 2017/7/3.
 */
import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValue = {
    'First': 0,
    'Second': 10,
    'Third': 30
};

const store = createStore(reducer, initValue);

export default store;