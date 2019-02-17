export const SET_WEBS_DATA = "SET_WEBS_DATA";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_NOT_FETCHING = "SET_NOT_FETCHING";

const API_URL =
    "https://gist.githubusercontent.com/carmona44/7265da7c5a2e0e53e8e8557f22e1e870/raw/2afd060540b5e14ef43ce37c8659ecb3505aed7b/webs.json";

export function fetchWebs() {
    const webs = fetch(API_URL)
        .then(data => data.json())
        .then(webs => webs);

    return {
        type: SET_WEBS_DATA,
        payload: webs
    }
}
