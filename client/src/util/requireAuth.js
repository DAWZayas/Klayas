import store from '../store';

export const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.token) {
    replace({
      pathname: '/home',
      state: {
        nextPathname: nextState.location.pathname,
      },
    });
  }
};
