import {thinky} from './thinky';

const type = thinky.type;
export const User = thinky.createModel('User', {
  email: type.string().required(),
  login: type.string().required(),
  password: type.string().required(),
  registrationDate: type.date().default(thinky.r.now()),
  idAuthor: type.string(),
});
