// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

// our packages
import {getUserTeachedClassRooms, getUserFollowedClassRooms} from '../../store/actions';

// our components
import ClassroomTeachedList from '../../components/classroom/ClassroomTeachedList';
import ClassroomFollowedList from '../../components/classroom/ClassroomFollowedList';

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  DoUserTeachedClassRooms: params => dispatch(getUserTeachedClassRooms(params)),
  DoUserFollowedClassRooms: params => dispatch(getUserFollowedClassRooms(params)),
});

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {user, DoUserTeachedClassRooms, DoUserFollowedClassRooms} = this.props;
    DoUserTeachedClassRooms({
      user: user.id,
    });
    DoUserFollowedClassRooms({
      user: user.id,
    });
  }

render(){
  const {user, classrooms} = this.props;
  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>Welcome {user.name}</h3>
        </div>
        <div className="panel-body">
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
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                Your classrooms
                <Link to="/create">
                  <span className="label label-primary pull-right">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true" /> {'Create new classroom'}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="panel-body">
            <ClassroomTeachedList/>

            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                Classrooms you follow
                <Link to="/search-classroom">
                  <span className="label label-primary pull-right">
                    <span className="glyphicon glyphicon-search" aria-hidden="true" /> {'Search classrooms'}
                  </span>
                </Link>
              </h4>
            </div>
            <div className="panel-body">
              <ClassroomFollowedList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
