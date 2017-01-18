import {Observable} from 'rxjs/Observable';

import {connPromise, r} from '../../util';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';

export const registerClassroomObservable = classroomId =>
  Observable.fromPromise(connPromise)
  .concatMap(conn => Observable.fromPromise(r.table('Classroom').get(classroomId).changes().run(conn)))
  .switchMap(cursor => Observable.create((observer) => {
    cursor.each((err, row) => {
      if (err) throw err;
      observer.next(row);
    });
    return function() {
      cursor.close();
    };
  }))
  .map(row => row.new_val)
  .filter(classroom => !!classroom)
  .map(classroom => ({
    type: ActionTypes.UPDATE_CLASSROOM_SUCCESS,
    payload: classroom,
  }))
  .catch(error => Observable.of(
    Actions.addNotificationAction({text: error.toString(), alertType: 'danger'}),
  ));
