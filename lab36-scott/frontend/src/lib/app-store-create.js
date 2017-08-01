import reducer from '../reducer/combine-reducers.js';
import {createStore, applyMiddleware} from 'redux';
import reduxReporter from './redux-reporter.js';

let appStoreCreate = () => createStore(reducer, applyMiddleware(reduxReporter));

export default appStoreCreate;
