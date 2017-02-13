// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// our packages
import App from './containers/app';
import store from './store';
import {requireAuth} from './util';

// our pages
import Home from './containers/home';
import Login from './containers/login';
import TestPage from './containers/testpage';
import Register from './containers/register';
import User from './containers/user';
import Profile from './containers/user/Profile';
import CompleteClassroom from './containers/classroom/complete-classroom';
import EditClassroom from './containers/classroom/edit-classroom';
import CreateClassroom from './containers/classroom/create';
import SearchClassroom from './containers/classroom/search-classroom';
import NotFound from './containers/notfound';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={User} onEnter={requireAuth} />
        <Route path="home" component={Home} />
        <Route path="login" component={Login} />
        <Route path="testpage" component={TestPage} />
        <Route path="register" component={Register} />
        <Route path="user" component={User} />
        <Route path="profile/:id" component={Profile} />
        <Route path="classroom/:id" component={CompleteClassroom} />
        <Route path="edit-classroom" component={EditClassroom} />
        <Route path="search-classroom" component={SearchClassroom} />
        <Route path="create" component={CreateClassroom} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
