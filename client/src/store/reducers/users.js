import * as ActionTypes from '../actionTypes';

const initialState = {name: 'usuario'};

export const users = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.CLOSE_SESSION:
      localStorage.removeItem('user.token');
      localStorage.removeItem('user.data');
      return {
        name: 'cerrando sesion...',
      };
    default:
      return state;
  }
};
