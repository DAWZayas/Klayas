import create from './create';
import get from './get';
import update from './update';
import getone from './getone';

export default (app) => {
  create(app);
  get(app);
  update(app);
  getone(app);
};
