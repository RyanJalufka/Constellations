import { combineReducers } from 'redux';
import monthReducer from './monthReducer'
import constellationReducer from './constellationReducer'

export default combineReducers({
  month: monthReducer,
  constellation: constellationReducer
});