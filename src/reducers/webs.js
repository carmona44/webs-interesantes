import {
  SET_WEBS_DATA,
} from "./../actions";


export const webs = (state = {}, action) => {
  switch (action.type) {
    case SET_WEBS_DATA: {
      return [ ...state, action.payload ];
    }
    default:
      return state;
  }
};
