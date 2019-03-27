import { SET_CURRENT_CONSTELLATION} from '../actions/types';

const initialState = {constellation: ''};

export default(state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_CONSTELLATION:
      let newState = action.payload;
      return newState;
    default:
      return state;
  }
}