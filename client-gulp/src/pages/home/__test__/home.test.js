/* eslint-disable react/react-in-jsx-scope */

import configureMockStore from 'redux-mock-store';
import HomeWarraper, {Home} from '../index';

// create mock store
const mockStore = configureMockStore();

const user = {
  id: '0',
  login: 'test',
  registrationDate: '2017-05-07T10:22:37.364Z',
};

const question = {
  id: '0',
  text: 'test',
  owner: user,
  expirationDate: new Date(2016, 1, 1, 1, 1, 1, 1), //'2017-05-07T10:22:37.364Z',
};


test('# Home Warraper', () => {
  const store = mockStore({auth: user, questions: {questions: []}});
  const component = (<HomeWarraper user={user} store={store} />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});


test('# Home', () => {
  const component = (<Home />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});

test('# Home with Questions', () => {
  const questions = [];
  //const questionsnew = [];
  const fetchQuestions = () => {
    questions.push({ ...question, id: 5});
  };

  const component = (
    <Home user={user} fetchQuestions={fetchQuestions} questions={questions} addAnswer={() => {}} />
  );
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});

