import {createStore, applyMiddleware} from 'redux';
import thunk from './redux-thunk.js';
import reducer from '../reducer';
import reporter from './redux-reporter.js';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreate;
