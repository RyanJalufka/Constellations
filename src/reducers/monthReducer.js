import { SET_CURRENT_MONTH} from '../actions/types';

const initialState = {month: ''};

export default(state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_MONTH:
      let newState = action.payload;
      return newState;
    default:
      return state;
  }
}