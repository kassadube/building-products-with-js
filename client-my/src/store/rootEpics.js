import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import {replace} from 'react-router-redux';
import * as ActionTypes from './actionTypes';
import 'rxjs';


const helloWorld = action$ =>  action$.ofType(ActionTypes.HELLO_WORLD)
    .switchMap(() =>
      Observable.timer(1000)// debounce
      .map(()=> ({type: ActionTypes.HELLO_WORLD_END,
          payload :{          
          world: 'world'
      }})) 
        
    );


export default combineEpics(helloWorld);
