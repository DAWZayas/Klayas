import './passport';
import login from './login';
import register from './register';
import registerclass from './registerclass';

export default (app) => {
  login(app);
  register(app);
  registerclass(app);
};

export {loginTaken} from './register';
