import { SET_CURRENT_CONSTELLATION } from './types';

export const setCurrentConstellation = (constellation, dispatch) => {
  return(dispatch) => {
    console.log('SET_CURRENT_MONTH: ', constellation);
    dispatch({ type: SET_CURRENT_CONSTELLATION, payload: constellation});
  }
}