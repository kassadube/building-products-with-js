/* global test, expect */
import App from '../index';
import {shallow} from 'enzyme';

test('# App', () => {
    const wrapper = shallow(<Label>Hellw</Label>) 
  expect(true);
});
