import reducer from '../reducer/combine-reducers.js';
import {createStore, applyMiddleware} from 'redux';
import reduxReporter from './redux-reporter.js';
import reduxThunk from './redux-thunk.js';

let appStoreCreate = () => createStore(reducer, applyMiddleware(reduxThunk, reduxReporter));

export default appStoreCreate;
