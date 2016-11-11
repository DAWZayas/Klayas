import create from './create';
import get from './get';
import update from './update';

export default (app) => {
  create(app);
  get(app);
  update(app);
};
