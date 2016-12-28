import * as ActionTypes from '../actionTypes';

const initialState = {};

export const classrooms = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CLASSROOM_SUCCESS:
      return {
        classrooms: action.payload.classroom,
      };
    default:
      return state;
  }
};
