import { SET_CURRENT_MONTH } from './types';

export const setCurrentMonth = (month, dispatch) => {
  return(dispatch) => {
    console.log('SET_CURRENT_MONTH: ', month);
    dispatch({ type: SET_CURRENT_MONTH, payload: month});
  }
}