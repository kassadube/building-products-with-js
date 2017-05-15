import configureMockStore from 'redux-mock-store';
import UserWarraper, {User} from '../index';

// create mock store
const mockStore = configureMockStore();

const user = {
  id: '0',
  login: 'test',
  registrationDate: '2017-05-07T10:22:37.364Z',
};


test('# User Warraper', () => {
    const store = mockStore({auth: user});
  const component = (<UserWarraper user={user} store={store}/>);
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});


test('# User', () => {
  const component = (<User user={user} />); 
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});
