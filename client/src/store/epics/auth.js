// npm packages
import {Observable} from 'rxjs/Observable';

// our packages
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest} from '../../util/signRequest';

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/login', payload)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response,
    }))
    .catch(err => Observable.of({
      type: ActionTypes.LOGIN_ERROR,
      payload: {
        error: err,
      },
    })),
  );

export const register = action$ => action$
  .ofType(ActionTypes.DO_REGISTER)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/register', payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: response,
      },
      Actions.loginAction(
        {login: payload.login, password: payload.password}),
    ))
    .catch(err => Observable.of({
      type: ActionTypes.REGISTER_ERROR,
      payload: {
        error: err,
      },
    })),
  );

export const updateProfile = action$ => action$
.ofType(ActionTypes.UPDATE_PROFILE)
.map(signRequest)
.switchMap(({headers, payload}) => Observable
  .ajax.post(`http://localhost:8080/api/user/${payload.id}`, payload, headers)
  .map(res => res.response)
  .map(response => ({
    type: ActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: response,
  }))
  .catch(err => Observable.of({
    type: ActionTypes.UPDATE_PROFILE_ERROR,
    payload: {
      error: err,
    },
  })),
);
