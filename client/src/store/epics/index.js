import {login, register, logout, updateProfile} from './auth';
import {createClassroom, getAllClassroom, getOneClassroom, updateClassroomAction} from './classroom';
import {addNotification} from './notifications';
import {addObservable} from './realtime';

export default [
  // auth
  login,
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
];
