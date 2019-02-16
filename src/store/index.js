import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import  reducers from './../reducers';

const initialState = {
    webs: []
};


export const store = createStore(
    reducers, 
    initialState,
    compose(
        applyMiddleware(thunk)
    )
);