import reducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter.js';

let appStoreCreate = () => createStore(reducer, applyMiddleware(reporter));

export default appStoreCreate;
