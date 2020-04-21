import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './Reducers';

let store;
let composeEnhancers;

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    /*eslint-disable-next-line no-console*/
    console.warn('Running In Dev');
    composeEnhancers = composeWithDevTools({maxAge: 20, latency: 0});
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares))
    );
} else {
    store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export default store;