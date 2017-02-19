// npm packages
import {Observable} from 'rxjs/Observable';
import Rx from 'rxjs/Rx';
import hello from 'hellojs';

// our packages
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {loginErrorToMessage, registerErrorToMessage, signRequest} from '../../util';

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/login', payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Login success', alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.LOGIN_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction(
        {text: loginErrorToMessage(error), alertType: 'danger'},
      ),
    )),
  );

export const oauthLogin = action$ => action$
  .ofType(ActionTypes.DO_OAUTH_LOGIN)
  .mergeMap(({payload}) => Rx.Observable.create(subs =>
    hello(payload.provider).login(token => subs.next({
      payload: {token: token.authResponse.access_token, provider: payload.provider},
    })),
  ))
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/login/google', payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Login success', alertType: 'info'}),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.LOGIN_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction({text: loginErrorToMessage(error), alertType: 'danger'}),
    )),
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
      Actions.addNotificationAction(
        {text: 'Succesful register', alertType: 'info'},
      ),
      Actions.loginAction(
        {login: payload.login, password: payload.password},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.REGISTER_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction(
        {text: registerErrorToMessage(error), alertType: 'danger'},
      ),
    )),
  );

export const logout = action$ => action$
  .ofType(ActionTypes.DO_LOGOUT)
  .switchMap(() => Observable.of(
    Actions.addNotificationAction({
      text: 'Logout success',
      alertType: 'info',
    }),
  ));

export const updateProfile = action$ => action$
  .ofType(ActionTypes.UPDATE_PROFILE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/user/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.UPDATE_PROFILE_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Profile succesfully updated', alertType: 'success'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.UPDATE_PROFILE_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction(
        {text: loginErrorToMessage(error), alertType: 'danger'},
      ),
    )),
  );
