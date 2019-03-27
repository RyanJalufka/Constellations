import { SET_CURRENT_MONTH } from './types';

export const setCurrentMonth = (month, dispatch) => {
  return(dispatch) => {
    dispatch({ type: SET_CURRENT_MONTH, payload: month});
  }
}
