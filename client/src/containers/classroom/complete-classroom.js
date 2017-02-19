// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Card, CircularProgress} from 'material-ui';

// our packages
import {getOneClassRoom, updateClassAction} from '../../store/actions';
import SimplyUser from '../../components/user/SimplyUser';
import ClassroomChat from '../../components/classroom/ClassroomChat';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
  isLoading: state.classrooms.status === 'loading',
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  onSeeCompleteClass: params => dispatch(getOneClassRoom(params)),
});

class CompleteClassroom extends Component {

  componentWillMount() {
    const {onSeeCompleteClass, routeParams} = this.props;
    onSeeCompleteClass({
      id: routeParams.id,
    });
  }

  render() {
    const {onCreateClick, classroom, user, isLoading} = this.props;
    const handleJoinClick = (e) => {
      e.preventDefault();
      onCreateClick({
        studentname: user.name,
        studentid: user.id,
        id: classroom.id,
      });
    };

    const searchUser = (id) => {
      const isStudent = student => (student.studentid === id);

      if (classroom.teacher !== id) {
        return false;
      }

      if (classroom.students.find(isStudent) === undefined) {
        return false;
      }
      return true;
    };

    return (
      <div className="">
        {isLoading ? (
          <CircularProgress className="col-xs-3 col-xs-offset-5" mode="indeterminate" style={{top: '50vh'}} />
        ) : (
          <div className="containerPaper">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3>
                  {user && !(classroom.teacher === user.id) && (
                    <Link to="" onClick={handleJoinClick}>
                      <span className="label label-primary pull-right">
                        <span className="glyphicon glyphicon-hand-up" aria-hidden="true" /> Join this classroom
                      </span>
                    </Link>
                  )}
                </h3>
              </div>
              <div className="panel-body">
                {!user && (
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4>{"Teacher's classroom: "}</h4>
                    </div>
                    <div className="panel-body">
                      {classroom.teacherName}
                    </div>
                  </div>
                )}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>
                      Share and learn
                    </h4>
                  </div>
                  <div className="panel-body">
                    <div>
                      {!user ?
                        (
                          <div className="col-md-12">
                            Login to join this classroom
                          </div>
                        ) :
                        searchUser(user.id) ?
                          (
                            <div className="col-md-12">
                              <ClassroomChat />
                            </div>
                          ) :
                          (
                            <div className="col-md-12">
                              Join this classroom to chat
                            </div>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
