import {login, oauthLogin, register, logout, updateProfile} from './auth';
import {
  createClassroom,
  getAllClassroom,
  getOneClassroom,
  getClassroomsByFollowedUser,
  getClassroomsByTeachedUser,
  updateClassroomAction,
} from './classroom';
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
  getClassroomsByFollowedUser,
  getClassroomsByTeachedUser,
  updateClassroomAction,
  // notirications
  addNotification,
  addObservable,
  // users
  getOneProfile,
];
