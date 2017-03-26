// npm packages
import {Observable} from 'rxjs/Observable';
// import {replace} from 'react-router-redux';
import 'rxjs';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';

const server = 'localhost:8090';// '207.232.46.92:8090';//;
// LOGIN EPIC ACTION
export const getAllQuestions = action$ => action$
  .ofType(ActionTypes.GET_ALL_QUESTIONS)
   .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get(`http://${server}/api/question`, headers)
  .map(res => res.response)
  .map(questions => ({
    type: ActionTypes.GET_ALL_QUESTIONS_SUCCESS,
    payload: {questions},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.GET_ALL_QUESTIONS_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );


export const answerQuestions = action$ => action$
  .ofType(ActionTypes.GET_ALL_QUESTIONS)
   .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get(`http://${server}/api/question`, headers)
  .map(res => res.response)
  .map(questions => ({
    type: ActionTypes.GET_ALL_QUESTIONS_SUCCESS,
    payload: {questions},
  }))
  .catch(err =>
    Observable.of({
      type: ActionTypes.GET_ALL_QUESTIONS_ERROR,
      payload: {
        error: err,
      },
    }),
  ),
  );
