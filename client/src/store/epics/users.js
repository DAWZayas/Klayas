// npm packages
import {Observable} from 'rxjs/Observable';

// our packages
import * as ActionTypes from '../actionTypes';
import {signRequest} from '../../util/signRequest';
import {server as serverConfig} from '../../../config';

export const getOneProfile = action$ => action$
  .ofType(ActionTypes.GET_ONE_PROFILE)
  .map(signRequest)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://${serverConfig.host}:${serverConfig.port}/api/user/${payload.id}`, headers)
    .map(res => res.response)
    .map(userprofile => ({
      type: ActionTypes.GET_ONE_PROFILE_SUCCESS,
      payload: {userprofile},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_ONE_PROFILE_ERROR,
      payload: {error},
    })),
  );
