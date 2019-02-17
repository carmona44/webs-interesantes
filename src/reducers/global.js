import {
    SET_SEARCH,
    SET_FETCHING_STATE,
  } from "./../actions";
  
  
  export const global = (state = {}, action) => {
    switch (action.type) {
      case SET_FETCHING_STATE: {
        return { ...state, isFetching : !state.isFetching };
      }
      case SET_SEARCH: {
        return {...state , search: action.payload}
      }

      
      default:
        return state;
    }
  };
  