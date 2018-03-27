import { createStore, combineReducers, applyMiddleware } from 'redux'
import { restaurants } from './reducers'
import stateData from '../../data/restaurants'

const logger = store => next => action => {
  let result
  console.groupCollapsed('디스패칭', action.type)
  console.log('이전 상태', store.getState())
  console.log('액션', action)
  result = next(action)
  console.log('다음 상태', store.getState())
  console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['restaurants-app'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ restaurants }),
    (localStorage['restaurants-app']) ?
      JSON.parse(localStorage['restaurants-app']) :
      initialState
  )


export default storeFactory