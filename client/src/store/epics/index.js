import {login, oauthLogin, register, logout, updateProfile} from './auth';
import {getUserFollowedClassRooms, getUserTeachedClassRooms, createClassroom, getAllClassroom, getOneClassroom, updateClassroomAction} from './classroom';
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
  getUserFollowedClassRooms,
  getUserTeachedClassRooms,
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
