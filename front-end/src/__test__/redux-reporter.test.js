import {createStore, applyMiddleware} from 'redux'
import reporter from '../lib/redux-reporter.js'

let mockStoreCreate = () => {
  let reducer = (state =0, action) => {
    switch(action.type){
      case 'ERROR':
      throw new Error('test error')
      case 'INC':
      return state + 1
      default:
      return state
      }
    }
    return createStore(reducer, applyMiddleware(reporter))
  }
   describe('redux- reporter', () => {
     test('dispatch should return the action', () => {
       let mockStore = mockStoreCreate()
       let action = {type: 'INC'}
       let result = mockStore.dispatch(action)
       console.log(mockStore,'mockStore!!!');
       expect(mockStore.getState()).toEqual(1)
       action = {type: 'INC'}
       result = mockStore.dispatch(action)
       expect(mockStore.getState()).toEqual(2)
     })
     test('testing the dispatch to handle errors...', () => {
       let mockStore = mockStoreCreate()

       let action = {type:'ERROR'}
       let result = mockStore.dispatch(action)

       expect(result).toBeInstanceOf(Error)
       expect(result.message).toEqual('test error')
       expect(result.action).toEqual(action)
     })
   })
