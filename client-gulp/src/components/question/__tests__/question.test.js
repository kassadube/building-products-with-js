import configureMockStore from 'redux-mock-store';
import  Question from '../index';

// create mock store
const mockStore = configureMockStore();

const user = {
  id: '0',
  login: 'test',
};
const question = {
  id: '444',
  owner: user,
  text: 'Question text',
  answers: [{answer: 'Test answer'}],
};


test('# Question', () => {
  const onAnswer = () => {};
  const component = (<Question question={question} onAnswer={onAnswer} />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
  // test events click
  const app = mount(component);
  const item = app.find('button');
  item.simulate('click');
});