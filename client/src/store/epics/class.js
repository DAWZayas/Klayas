import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';

export const createClass = action$ => action$
  .ofType(ActionTypes.CREATE_CLASS)
  .switchMap(({payload}) => Observable
    .ajax.post('http://localhost:8080/api/class/create', payload)
    .map(res => res.response)
    .map(response => ({
      type: ActionTypes.CREATE_SUCCESS,
      payload: response,
    }))
    .catch(err => Observable.of({
      type: ActionTypes.CREATE_ERROR,
      payload: {
        error: err,
      },
    }))
  );


