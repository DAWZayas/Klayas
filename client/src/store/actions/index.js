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
