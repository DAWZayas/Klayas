import * as ActionTypes from '../actionTypes';

const initialState = {userprofile: []};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ONE_PROFILE:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.GET_ONE_PROFILE_SUCCESS:
      return {
        ...state,
        status: 'done',
        userprofile: action.payload.userprofile,
      };
    default:
      return state;
  }
};
