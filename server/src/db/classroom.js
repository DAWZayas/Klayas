// our packages
import {thinky} from './thinky';

export const Classroom = thinky.createModel('Classroom', {
  name: thinky.type.string().required(),
  date: thinky.type.date(),
  time: thinky.type.string(),
  description: thinky.type.string(),
  url: thinky.type.string(),
  teacher: thinky.type.string().required(),
  teacherName: thinky.type.string().required(),
  isPublic: thinky.type.boolean().default(true),
  chat: thinky.type.array().schema(thinky.type.object().schema(
    {
      studentname: thinky.type.string(),
      studentid: thinky.type.string(),
      date: thinky.type.date(),
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
