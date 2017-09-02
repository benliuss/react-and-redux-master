/**
 * Created by asus on 2017/7/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './c03-redux/views/ControlPanel.js';

import store from './c03-redux/Store.js';
import Provider from './c03-redux/Provider.js';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
