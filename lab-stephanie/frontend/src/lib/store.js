import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import reporter from './reporter.js'

export default () => createStore(reducer, applyMiddleware(reporter))
