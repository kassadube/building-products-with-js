/* eslint-disable react/react-in-jsx-scope */

import configureMockStore from 'redux-mock-store';
import LoginWarraper, {Login} from '../index';

// create mock store
const mockStore = configureMockStore();

const user = {
  id: '0',
  login: 'test',
  registrationDate: '2017-05-07T10:22:37.364Z',
};


test('# Login Warraper', () => {
  const store = mockStore({auth: user});
  const component = (<LoginWarraper user={user} store={store} />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});


test('# Login', () => {
  const component = (<Login />);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});


test('# Login ', () => {
  const newLogin = 'test';
  const newPassword = '1234';  
  const token = 'asd';
  // const error = 'err';
  const navToHome = () => expect(true).toBeTruthy();
  const onLoginClick = ({login, password, rememberMe}) => {
    expect(login).toBe(newLogin);
    expect(password).toBe(newPassword);
    expect(rememberMe).toBeTruthy();
  };


  const component = (
    <Login user={user} onLoginClick={onLoginClick} token={token} navToHome={navToHome} />
  );
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
  const app = mount(component);
  // set new question text
  app.find('#usernameInput').getDOMNode().value = newLogin;
  // set new question expiration date
  app.find('#passwordInput').getDOMNode().value = newPassword;
  app.find('#rememberMe').getDOMNode().checked = true;
  // click answer button
  app.find('button').simulate('click');
});

