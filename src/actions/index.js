var webs = require('../store/data');

export const SET_WEBS_DATA = "SET_WEBS_DATA";
export const SET_FETCHING_STATE = "SET_FETCHING_STATE";
export const SET_SEARCH = "SET_SEARCH";


export const setIsFetchingState = () => ({ type: SET_FETCHING_STATE });
export const setWebsData = (webs) => ({type: SET_WEBS_DATA, webs});
export const setSearch = (e) => ({type: SET_SEARCH, payload: e.target.value});

export const fetchWebs = () => {
    return dispatch => {
        dispatch(setIsFetchingState());
        dispatch(setWebsData(  {webs} ));
        dispatch(setIsFetchingState());
    };
};
