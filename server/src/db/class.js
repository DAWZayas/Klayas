// our packages
import {thinky} from './thinky';

export const Class = thinky.createModel('Class', {
  name: thinky.type.string().required(),
  date: thinky.type.date().required(),
  hour: thinky.type.date().required(),
  teacher: thinky.type.string(),
  /*students: thinky.type.array().object(),*/
});
