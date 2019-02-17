export const SET_WEBS_DATA = "SET_WEBS_DATA";
export const SET_FETCHING_STATE = "SET_FETCHING_STATE";
export const SET_SEARCH = "SET_SEARCH";

const API_URL =
    "https://gist.githubusercontent.com/carmona44/7265da7c5a2e0e53e8e8557f22e1e870/raw/2afd060540b5e14ef43ce37c8659ecb3505aed7b/webs.json";

export const setIsFetchingState = () => ({ type: SET_FETCHING_STATE });
export const setWebsData = (webs) => ({type: SET_WEBS_DATA, webs})

export const fetchWebs = () => {
    return dispatch => {
        dispatch(setIsFetchingState());

        fetch(API_URL)
            .then(data => data.json())
            .then(webs => {
                dispatch(setWebsData({ webs }));
            })
            .then( () => dispatch(setIsFetchingState()));
    };
};
