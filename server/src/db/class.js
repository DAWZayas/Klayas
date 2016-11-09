// our packages
import {thinky} from './thinky';

export const Class = thinky.createModel('Class', {
  name: thinky.type.string().required(),
  date: thinky.type.date(),
  hour: thinky.type.date(),
  teacher: thinky.type.string(),
  /*students: thinky.type.array().object(),*/
});
