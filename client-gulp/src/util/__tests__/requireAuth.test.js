/* global test, expect */

import {requireAuth} from '../requireAuth';

beforeEach(() => {
  jest.resetModules();
});

test('# requireAuth', () => {
  requireAuth({location: {pathname: 'test'}}, (obj) => {
    expect(obj.pathname).toBe('/login');
    expect(obj.state.nextPathname).toBe('test');
  });
});

