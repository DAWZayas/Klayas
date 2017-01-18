import * as ActionTypes from '../actionTypes';

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
});

export const editProfile = payload => ({
  type: ActionTypes.UPDATE_PROFILE,
  payload,
});

export const createClassAction = payload => ({
  type: ActionTypes.CREATE_CLASSROOM,
  payload,
});

export const updateClassAction = payload => ({
  type: ActionTypes.UPDATE_CLASSROOM,
  payload,
});

export const doSearchClassroom = payload => ({
  type: ActionTypes.SEARCH_CLASSROOMS,
  payload,
});

export const getAllClassRoom = () => ({
  type: ActionTypes.GET_ALL_CLASSROOM,
});

export const getOneClassRoom = payload => ({
  type: ActionTypes.GET_ONE_CLASSROOM,
  payload,
});

let nextNotificationId = 0;

/**
 * Add a notification to the store.
 * @param {String} text - text to display
 * @param {String} alertType - Bootstrap alert style: success | info | warning | danger
*/
export const addNotificationAction = ({text, alertType}) => ({
  type: ActionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    text,
    alertType,
  },
});

/**
 * Remove a notification from the store.
 * @param {String} notificationId
*/

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

export const addObservable = observable => ({
  type: ActionTypes.ADD_OBSERVABLE,
  payload: observable,
});

export const removeObservable = observable => ({
  type: ActionTypes.REMOVE_OBSERVABLE,
  payload: observable,
});
