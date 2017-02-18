import create from './create';
import deleteClassroom from './delete';
import get from './get';
import update from './update';
import getone from './getone';

export default (app) => {
  create(app);
  deleteClassroom(app);
  get(app);
  update(app);
  getone(app);
};
