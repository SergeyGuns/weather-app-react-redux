import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import wetherReducer from './Weather-reducer'
export default combineReducers({
  routing: routerReducer,
  counter,
  wetherReducer
})