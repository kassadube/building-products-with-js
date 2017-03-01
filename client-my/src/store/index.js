import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const initialState = {world: 'click me!'};
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
export const helloWorldAction = () => ({type: 'HELLO'});

const reducer = combineReducers({helloWorld, routing: routerReducer});
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
