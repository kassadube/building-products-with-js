/* global test, expect, React */
import App from '../index';
import {shallow} from 'enzyme';

test('# App', () => {
  const wrapper = shallow(<App>test</App>);
  expect(wrapper).toMatchSnapshot();
});
