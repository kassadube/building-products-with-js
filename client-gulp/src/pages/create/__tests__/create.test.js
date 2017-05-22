/* eslint-disable react/react-in-jsx-scope */

import configureMockStore from 'redux-mock-store';
import CreateWarraper, {Create} from '../index';

// create mock store
const mockStore = configureMockStore();

const question = {
  id: '0',
  text: 'test',
  expirationDate: new Date(2016, 1, 1, 1, 1, 1, 1), //'2017-05-07T10:22:37.364Z',
};


const user = {
  id: '0',
  login: 'test',
  registrationDate: '2017-05-07T10:22:37.364Z',
};

test('# Create Warraper', () => {
  const store = mockStore({auth: user});
  const component = (<CreateWarraper user={user} store={store} />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});


test('# Create', () => {
  const component = (<Create />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});

test('# doAddQuestion', () => {
  const newText = 'newTest';
  const newExpirationDate = new Date(2016, 1, 1, 1, 1, 1, 1);
  const doAddQuestion = ({text, expirationDate}) => {
    expect(text).toBe(newText);
    expect(expirationDate).toBe(newExpirationDate.toISOString());
  };
  const component = (
    <Create user={user} doAddQuestion={doAddQuestion} />
  );
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();

  const app = mount(component);
  // set new question text
  app.find('#questionText').getDOMNode().value = newText;
  // set new question expiration date
  app.find('#expirationDate').getDOMNode().value = newExpirationDate.toISOString();
  // click answer button
  app.find('button').simulate('click');

});
