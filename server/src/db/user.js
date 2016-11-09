// our packages
import {thinky} from './thinky';

export const User = thinky.createModel('User', {
  name: thinky.type.string().required(),
  surname: thinky.type.string().required(),
  login: thinky.type.string().required(),
  email: thinky.type.string().required(),
  password: thinky.type.string().required(),
  registrationDate: thinky.type.date().default(thinky.r.now()),
  /*class: thinky.type.array().object(),*/
});
