import create from './create';
import get from './get';
import update from './update';
import getone from './getone';
import getuserfollow from './getuserfollow';

export default (app) => {
  create(app);
  get(app);
  update(app);
  getone(app);
  getuserfollow(app);
};
