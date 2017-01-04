// npm packages
import {Observable} from 'rxjs/Observable';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';
import * as Actions from '../actions';

export const getAllClassRoom = action$ => action$
  .ofType(ActionTypes.GET_ALL_CLASSROOM)
  .map(signRequest)
  .switchMap(({headers}) => Observable
    .ajax.get('http://localhost:8080/api/classroom', headers)
    .map(res => res.response)
    .map(classroom => ({
      type: ActionTypes.GET_ALL_CLASSROOM_SUCCESS,
      payload: {classroom},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ALL_CLASSROOM_ERROR,
      payload: {error},
    })),
  );

export const getOneClassRoom = action$ => action$
  .ofType(ActionTypes.GET_ONE_CLASSROOM)
  .map(signRequest)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://localhost:8080/api/classroom/${payload.id}`, headers)
    .map(res => res.response)
    .map(specificclassroom => ({
      type: ActionTypes.GET_ONE_CLASSROOM_SUCCESS,
      payload: {specificclassroom},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ONE_CLASSROOM_ERROR,
      payload: {error},
    })),
  );

export const createClass = action$ => action$
  .ofType(ActionTypes.CREATE_CLASS)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/classroom/create', payload, headers)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.CREATE_SUCCESS,
      payload: response,
    }))
    .concat(Observable.of(
      Actions.addNotificationAction(
        {text: 'Clase creada correctamente', alertType: 'success'},
    )))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction({text: 'Ha ocurrido un error durante la creación de la clase', alertType: 'danger'}),
    )),
  );

  export const updateClassAction = action$ => action$
  .ofType(ActionTypes.UPDATE_CLASS)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/classroom/${payload.id}`, payload, headers)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.UPDATE_CLASS_SUCCESS,
      payload: response,
    }))
    .concat(Observable.of(
      Actions.addNotificationAction(
        {text: 'Clase actualizada correctamente', alertType: 'success'},
    )))
    .catch(error => Observable.of(
      {
        type: ActionTypes.UPDATE_CLASS_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction({text: 'Ha ocurrido un error durante la actualización de la clase', alertType: 'danger'}),
    )),
  );
