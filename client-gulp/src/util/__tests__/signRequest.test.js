/* eslint-disable no-unused-vars */
/* global test, expect */

import {signRequest} from '../signRequest';

test('# signRequest', () => {
  localStorage.setItem('user.token', 'test');
  const req = {test: 'value'};
  const expectValue = {
    ...req,
    headers: {'x-access-token': 'test'},
  };
  expect(signRequest(req)).toEqual(expectValue);
});

