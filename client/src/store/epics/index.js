import {login, register, updateProfile} from './auth';
import {helloWorld} from './helloworld';
import {createClassroom} from './classroom';

export default [
  // auth
  login,
  register,
  updateProfile,
  // hello world
  helloWorld,
  createClassroom,
];
