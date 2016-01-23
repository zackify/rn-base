import { combineReducers, applyMiddleware, createStore } from 'redux'
import items from './items'
import authentication from './authentication'
import { storage } from 'redux-restore'

let createStoreWithMiddleware = applyMiddleware(
  storage(['authentication'])
)(createStore)

let reducers = combineReducers({
  items,
  authentication
})

export default createStoreWithMiddleware(reducers)

