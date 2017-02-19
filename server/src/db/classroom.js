// our packages
import {thinky} from './thinky';

export const Classroom = thinky.createModel('Classroom', {
  name: thinky.type.string().required(),
  description: thinky.type.string(),
  teacher: thinky.type.string().required(),
  teacherName: thinky.type.string().required(),
  chat: thinky.type.array().schema(thinky.type.object().schema(
    {
      studentname: thinky.type.string(),
      studentid: thinky.type.string(),
      date: thinky.type.date().default(thinky.r.now()),
      text: thinky.type.string(),
    }
  ).default([])),
  students: thinky.type.array().schema(thinky.type.object().schema(
    {
      studentname: thinky.type.string(),
      studentid: thinky.type.string(),
    }
  ).default([])),
});
