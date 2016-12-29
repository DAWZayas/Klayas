import * as ActionTypes from '../actionTypes';

const initialState = {classrooms: [], specificclassroom: []};

export const classrooms = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CLASSROOM_SUCCESS:
      return {
        ...state,
        classrooms: action.payload.classroom,
      };
    case ActionTypes.GET_ONE_CLASSROOM_SUCCESS:
      return {
        ...state,
        specificclassroom: action.payload.specificclassroom,
      };
    default:
      return state;
  }
};
