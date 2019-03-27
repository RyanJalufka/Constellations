import { SET_CURRENT_CONSTELLATION } from './types';

export const setCurrentConstellation = (constellation, dispatch) => {
  return(dispatch) => {
    dispatch({ type: SET_CURRENT_CONSTELLATION, payload: constellation});
  }
}
