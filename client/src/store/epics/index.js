import {login, register, updateProfile} from './auth';
import {createClass, getAllClassRoom, getOneClassRoom, updateClassAction} from './classroom';

export default [
  // auth
  login,
  register,
  updateProfile,
  // classroom
  createClass,
  getAllClassRoom,
  getOneClassRoom,
  updateClassAction,
];
