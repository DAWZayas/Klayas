import './passport';
import login from './login';
import register from './register';

export default (app) => {
  login(app);
  register(app);
};

export {emailTaken} from './register';
