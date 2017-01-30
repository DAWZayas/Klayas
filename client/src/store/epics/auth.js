// npm packages
import {Observable} from 'rxjs/Observable';

// our packages
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {loginErrorToMessage, registerErrorToMessage, signRequest} from '../../util';
import {server as serverConfig} from '../../../config';

export const login = action$ => action$
  .ofType(ActionTypes.DO_LOGIN)
  .switchMap(({payload}) => Observable
    .ajax.post(`http://${serverConfig.host}:${serverConfig.port}/api/login`, payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Acceso correcto', alertType: 'info'},
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

export const register = action$ => action$
  .ofType(ActionTypes.DO_REGISTER)
  .switchMap(({payload}) => Observable
    .ajax.post(`http://${serverConfig.host}:${serverConfig.port}/api/register`, payload)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Registro completado', alertType: 'info'},
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
      text: 'Cerrada la sesión',
      alertType: 'info',
    }),
  ));

export const updateProfile = action$ => action$
  .ofType(ActionTypes.UPDATE_PROFILE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${serverConfig.host}:${serverConfig.port}/api/user/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.UPDATE_PROFILE_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Perfil actualizado correctamente', alertType: 'success'},
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
