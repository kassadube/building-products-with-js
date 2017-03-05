import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import {replace} from 'react-router-redux';
import * as ActionTypes from './actionTypes';
import 'rxjs';
import epics from './epics';



export default combineEpics(...epics);
