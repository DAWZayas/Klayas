import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({
  type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

export const clearSesionAction = () => ({
  type: ActionTypes.CLOSE_SESSION,
});

export const editProfile = payload => ({
  type: ActionTypes.UPDATE_PROFILE,
  payload,
});

export const createClassAction = payload => ({
  type: ActionTypes.CREATE_CLASS,
  payload,
});

export const updateClassAction = payload => ({
  type: ActionTypes.UPDATE_CLASS,
  payload,
});

export const getAllClassRoom = () => ({
  type: ActionTypes.GET_ALL_CLASSROOM,
});

export const getOneClassRoom = payload => ({
  type: ActionTypes.GET_ONE_CLASSROOM,
  payload,
});
