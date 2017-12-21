import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import weather from './weather'
export default combineReducers({
  routing: routerReducer,
  counter,
  weather
})