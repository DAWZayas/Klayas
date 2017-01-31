import * as ActionTypes from '../actionTypes';

const initialState = {classrooms: [], search: '', userteachedclassrooms: [], userfollowedclassrooms: []};

export const classrooms = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CLASSROOM_SUCCESS:
      return {
        ...state,
        classrooms: action.payload.classroom,
      };
    case ActionTypes.GET_USER_TEACHED_CLASSROOMS:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_USER_TEACHED_CLASSROOMS_SUCCESS:
      return {
        ...state,
        status: 'done',
        userteachedclassrooms: action.payload.userteachedclassrooms,
      };
    case ActionTypes.GET_USER_FOLLOWED_CLASSROOMS_SUCCESS:
      return {
        ...state,
        status: 'done',
        userfollowedclassrooms: action.payload.userfollowedclassrooms,
      };

    case ActionTypes.UPDATE_CLASSROOM:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_ONE_CLASSROOM_SUCCESS:
      return {
        ...state,
        status: 'done',
        specificclassroom: action.payload.specificclassroom,
      };
    case ActionTypes.UPDATE_CLASSROOM:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.UPDATE_CLASSROOM_SUCCESS:
      return {
        ...state,
        status: 'done',
        specificclassroom: action.payload,
      };
    case ActionTypes.SEARCH_CLASSROOMS:
      return {
        ...state,
        search: action.payload.searchterm,
      };
    default:
      return state;
  }
};
