/* eslint-disable react/react-in-jsx-scope */
import Footer from '../index';

test('# Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
