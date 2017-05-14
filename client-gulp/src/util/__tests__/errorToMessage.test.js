/* global test, expect */

import {loginErrorToMessage} from '../errorToMessage';

describe('errorToMessage', () => {
  it('Wrong password', () => {
  // Render a checkbox with label in the document
    expect(loginErrorToMessage({status: 401})).toEqual('Wrong login or password, please try again!');
  });
});

