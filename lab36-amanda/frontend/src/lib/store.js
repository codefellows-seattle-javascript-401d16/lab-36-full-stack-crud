// store
//
// in lib/store.js export a function that will return a new redux store from your category reducer ALSO  in order to test compnanatn that need a store to be tetsed.


import {createStore, applyMiddleware} from 'redux';
import reporter from './redux-reporter';
import reducer from '../reducer';


export default () => createStore(reducer);
