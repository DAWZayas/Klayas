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

export const getUserTeachedClassRooms = action$ => action$
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

export const getUserFollowedClassRooms = action$ => action$
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
        {text: 'Classroom created correctly', alertType: 'success'},
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
        {text: 'An error occurred during classroom creation', alertType: 'danger'},
      ),
    )),
  );

export const deleteClassroomAction = action$ => action$
.ofType(ActionTypes.DELETE_CLASSROOM)
.map(signRequest)
.switchMap(({headers, payload}) => Observable
  .ajax.delete(`http://localhost:8080/api/classroom/${payload.id}`, headers)
  .map(res => res.response)
  .mergeMap(response => Observable.of(
    {
      type: ActionTypes.DELETE_CLASSROOM_SUCCESS,
      payload: response,
    },
    Actions.addNotificationAction(
      {text: 'The Classroom has been successfully deleted', alertType: 'success'},
    ),
  ))
  .catch(error => Observable.of(
    {
      type: ActionTypes.DELETE_CLASSROOM_ERROR,
      payload: {
        error,
      },
    },
    Actions.addNotificationAction(
      {text: 'An error occurred while deleting the Classroom', alertType: 'danger'},
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
        {text: 'The Classroom has been successfully updated', alertType: 'success'},
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
        {text: 'An error occurred while updating the Classroom', alertType: 'danger'},
      ),
    )),
  );
