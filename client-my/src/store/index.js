import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {createEpicMiddleware} from 'redux-observable';

import rootReducer from './rootReducer';
import rootEpics from './rootEpics';

const epicMiddleware = createEpicMiddleware(rootEpics);

// const initialState = {world: 'click me!'};
/*
const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
      return {
        world: 'world',
      };
    default:
      return state;
  }
};
*/

/*
const helloWorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO':
      return {
        ...state, world: 'ddd'};
    default:
      return state;
  }
};
*/


// const reducer = combineReducers(rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(
        epicMiddleware,
      ),
  ),
  );

export default store;
