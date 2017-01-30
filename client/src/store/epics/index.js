import {login, register, logout, updateProfile} from './auth';
import {getUserTeachedClassRooms, createClassroom, getAllClassroom, getOneClassroom, updateClassroomAction} from './classroom';
import {addNotification} from './notifications';
import {getOneProfile} from './users';

export default [
  // auth
  login,
  register,
  logout,
  updateProfile,
  // classroom
  getUserTeachedClassRooms,
  createClassroom,
  getAllClassroom,
  getOneClassroom,
  updateClassroomAction,
  // notirications
  addNotification,
  // users
  getOneProfile,
];
