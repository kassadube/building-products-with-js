
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

import * as ActionTypes from '../actionTypes';


export const auth = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
  .ajax.post('http://localhost:8090/api/login', payload)
  .map(res => res.response)
  .map(response => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: response,
  })),
  );



