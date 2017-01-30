// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

// our packages
import {getAllClassRoom, getUserTeachedClassRooms} from '../../store/actions';

// our components
import ClassroomList from '../../components/classroom/ClassroomList';
import ClassroomLinker from '../../components/classroom/ClassroomLinker';

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  DoGetAllClassRoom: _.once(() => dispatch(getAllClassRoom())),
  DoUserTeachedClassRooms: params => dispatch(getUserTeachedClassRooms(params)),
});

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {user, DoGetAllClassRoom, DoUserTeachedClassRooms} = this.props;
    DoGetAllClassRoom();
    DoUserTeachedClassRooms({
      user: user.id,
    })
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
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true" /> {'Editar perfil'}
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
            <ClassroomList/>

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
              {classrooms.map((classroom, index) => (
                <ClassroomLinker key={index} classroom={classroom} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
