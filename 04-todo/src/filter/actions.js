/**
 * Created by asus on 2017/7/4.
 */
import {SET_FILTER} from './actionTypes.js';

export const setFilter = filterType => ({
    type: SET_FILTER,
    filter: filterType
});