import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import * as weatherActions from './Weather-actions'
import weatherReducer from './Weather-reducer'
const weather = {
  ...weatherActions,
  ...weatherReducer
}
export default combineReducers({
  routing: routerReducer,
  counter,
  weather
})