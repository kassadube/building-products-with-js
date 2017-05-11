/* global test, expect */
import {loginErrorToMessage} from '../errorToMessage';

test('# login error message', () => {
  expect(loginErrorToMessage({status: 401}).toBe('gggg'));
});
