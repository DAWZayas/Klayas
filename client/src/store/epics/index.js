import {login, oauthLogin, register, logout, updateProfile} from './auth';
import {createClassroom, getAllClassroom, getOneClassroom, updateClassroomAction} from './classroom';
import {addNotification} from './notifications';
import {addObservable} from './realtime';
import {getOneProfile} from './users';

export default [
  // auth
  login,
  oauthLogin,
  register,
  logout,
  updateProfile,
  // classroom
  createClassroom,
  getAllClassroom,
  getOneClassroom,
  updateClassroomAction,
  // notirications
  addNotification,
  addObservable,
  // users
  getOneProfile,
];
