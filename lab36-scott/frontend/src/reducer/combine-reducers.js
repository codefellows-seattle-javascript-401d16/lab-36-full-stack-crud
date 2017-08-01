import {combineReducers} from 'redux';
import resortReducer from './resort-reducer.js';

export default combineReducers({resorts: resortReducer}); 
