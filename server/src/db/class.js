// our packages
import {thinky} from './thinky';

export const Class = thinky.createModel('Class', {
  name: thinky.type.string().required(),
  date: thinky.type.date(),
  // hour: thinky.type.date(),
  teacher: thinky.type.string().required(),
  isPublic: thinky.type.boolean().default(true),
  students: thinky.type.array().schema(thinky.type.object().schema(
    {
      studentname: thinky.type.string(),
      studentid: thinky.type.string(),
    }
  ).default([])),
});
