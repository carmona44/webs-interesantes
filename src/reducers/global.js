import {
    SET_IS_FETCHING,
    SET_NOT_FETCHING
  } from "./../actions";
  
  
  export const global = (state = {}, action) => {
    switch (action.type) {
      case SET_IS_FETCHING: {
        return [ ...state, action.payload ];
      }
      case SET_NOT_FETCHING: {
        return [ ...state, action.payload ];
      }
      
      default:
        return state;
    }
  };
  