// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// our packages
import App from './containers/app';
import store from './store';
import {requireAuth} from './util';

// our pages
import Home from './containers/home';
import Login from './containers/login';
import Register from './containers/register';
import User from './containers/user';
import EditProfile from './containers/user/edit-profile';
import CreateClassroom from './containers/classroom/create';
import NotFound from './containers/notfound';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="users" component={User} />
        <Route path="users/edit-profile" component={EditProfile} />
        <Route path="classroom/create" component={CreateClassroom} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
