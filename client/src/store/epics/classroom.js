// npm packages
import {Observable} from 'rxjs/Observable';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';
import * as Actions from '../actions';

export const getAllClassroom = action$ => action$
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

export const getClassroomsByTeachedUser = action$ => action$
  .ofType(ActionTypes.GET_USER_TEACHED_CLASSROOMS)
  .map(signRequest)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://localhost:8080/api/classroom/teached/${payload.user}`, headers)
    .map(res => res.response)
    .map(userteachedclassrooms => ({
      type: ActionTypes.GET_USER_TEACHED_CLASSROOMS_SUCCESS,
      payload: {userteachedclassrooms},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_USER_TEACHED_CLASSROOMS_ERROR,
      payload: {error},
    })),
  );

export const getClassroomsByFollowedUser = action$ => action$
  .ofType(ActionTypes.GET_USER_FOLLOWED_CLASSROOMS)
  .map(signRequest)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://localhost:8080/api/classroom/followed/${payload.user}`, headers)
    .map(res => res.response)
    .map(userfollowedclassrooms => ({
      type: ActionTypes.GET_USER_FOLLOWED_CLASSROOMS_SUCCESS,
      payload: {userfollowedclassrooms},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_USER_FOLLOWED_CLASSROOMS_ERROR,
      payload: {error},
    })),
  );

export const getOneClassroom = action$ => action$
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

export const createClassroom = action$ => action$
  .ofType(ActionTypes.CREATE_CLASSROOM)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/classroom/create', payload, headers)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.CREATE_CLASSROOM_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Clase creada correctamente', alertType: 'success'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_CLASSROOM_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction(
        {text: 'Ha ocurrido un error durante la creación de la clase', alertType: 'danger'},
      ),
    )),
  );

export const updateClassroomAction = action$ => action$
  .ofType(ActionTypes.UPDATE_CLASSROOM)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/classroom/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.UPDATE_CLASSROOM_SUCCESS,
        payload: response,
      },
      Actions.addNotificationAction(
        {text: 'Clase actualizada correctamente', alertType: 'success'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.UPDATE_CLASSROOM_ERROR,
        payload: {
          error,
        },
      },
      Actions.addNotificationAction(
        {text: 'Ha ocurrido un error durante la actualización de la clase', alertType: 'danger'},
      ),
    )),
  );
