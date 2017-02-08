// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import {Card} from 'material-ui';

// our packages
import {getUserTeachedClassRooms, getUserFollowedClassRooms} from '../../store/actions';
import {ClassroomFollowedList, ClassroomTeachedList} from '../../components/classroom/';

import styles from './User.scss';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  DoUserTeachedClassRooms: params => dispatch(getUserTeachedClassRooms(params)),
  DoUserFollowedClassRooms: params => dispatch(getUserFollowedClassRooms(params)),
});

class User extends Component {
  componentWillMount() {
    const {user, DoUserTeachedClassRooms, DoUserFollowedClassRooms} = this.props;
    DoUserTeachedClassRooms({
      user: user.id,
    });
    DoUserFollowedClassRooms({
      user: user.id,
    });
  }

  render() {
    const {user, classrooms} = this.props;
    return (
      <div className={styles.container}>
        <Card zDepth={3} className={styles.card}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                Your profile
                <Link to="/user/edit-profile">
                  <span className="label label-primary pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true" /> {'Edit profile'}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="panel-body">
              Name: {user.name}<br />
              Surname: {user.surname}<br />
              Username: {user.login}<br />
              Email address: {user.email}<br />
            </div>
          </div>
        </Card>

        <Card zDepth={3} className={styles.card}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                Your classrooms
                <Link to="/create">
                  <span className="label label-primary pull-right">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true" /> {'New classroom'}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="panel-body">
              <ClassroomTeachedList />
            </div>
          </div>
        </Card>

        <Card zDepth={3} className={styles.card}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                Classrooms you follow
                <Link to="/search-classroom">
                  <span className="label label-primary pull-right">
                    <span className="glyphicon glyphicon-search" aria-hidden="true" /> {'Search'}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="panel-body">
              <ClassroomFollowedList />
            </div>
          </div>
        </Card>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
