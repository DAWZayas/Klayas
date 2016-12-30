import {login, register, updateProfile} from './auth';
import {createClassroom} from './classroom';

export default [
  // auth
  login,
  register,
  updateProfile,
  // hello world
  createClassroom,
];
