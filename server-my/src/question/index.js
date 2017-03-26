import get from './get';
import create from './create';
import update from './update';
import answer from './answer';


export default (app) => {
  get(app);
  create(app);
  update(app);
  answer(app);
};
