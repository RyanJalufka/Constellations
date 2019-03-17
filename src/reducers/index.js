import { combineReducers } from 'redux';
import monthReducer from './monthReducer'

export default combineReducers({
  month: monthReducer
});