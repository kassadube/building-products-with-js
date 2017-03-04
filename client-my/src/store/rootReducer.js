import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import {helloWorld} from './reducers/helloWorld';



export default combineReducers({
 helloWorld,
 routing: routerReducer,
});