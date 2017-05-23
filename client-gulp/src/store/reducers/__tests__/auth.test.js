import {auth} from '../auth';

import * as ActionTypes from '../../actionTypes';

const user = {
  id: '0',
  login: 'test',
  registrationDate: '2017-05-07T10:22:37.364Z',
};

test('# REDUCER AUTH register success', () => {
  const testState = {
    token: 'asd',
    user,
  };
  const action = {
    type: ActionTypes.REGISTER_SUCCESS,
    payload: {test: true},
  };
  expect(auth(testState, action).redirectToLogin).toBeTruthy();
});

test('# REDUCER AUTH login success', () => {
  const testState = {
    token: 'asd',
    user,
  };
  const action = {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: {token: 'asd', user},
  };
  // console.log(auth(testState, action));
  expect(auth(testState, action).user).toEqual(user);
  expect(auth(testState, action).token).toBe('asd');
});
