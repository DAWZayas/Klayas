// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// our packages
import {updateClassAction} from '../../store/actions';
import SimplyUser from '../../components/user/SimplyUser';
import {getOneClassRoom} from '../../store/actions';
import {Loader} from '../../components/loader';
import ClassroomChat from '../../components/classroom/ClassroomChat';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
  status: state.classrooms.status,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  onSeeCompleteClass: params => dispatch(getOneClassRoom(params)),
});

class CompleteClassroom extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  const {onSeeCompleteClass, routeParams} = this.props;
  onSeeCompleteClass({
    id: routeParams.id,
  });
  }

  render() {
    const {onCreateClick, classroom, user, status} = this.props;
    const handleClick = (e) => {
      e.preventDefault();
      onCreateClick({
        studentname: user.name,
        studentid: user.id,
        id: classroom.id,
      });
    };

    function searchuser(id){
      if (true) {
        return true;
      } else {
        for (let i = 0; i < classroom.students.length; i++){
            if (classroom.students[i].studentid === id)
              return true;
        }
        return false;
      }
    }

    return (
      <div className="">
        {status !== 'done' ? (<Loader />) :
          (
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3>{classroom.name}
                  {!user ? (
                    <Link to="/home">
                      <span className="label label-primary pull-right">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                        Login to join this classroom
                      </span>
                    </Link>) :
                    classroom.teacher === user.id ? (
                      <Link to="/edit-classroom">
                        <span className="label label-primary pull-right">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                          Edit classroom
                        </span>
                      </Link>) :
                    (
                      <Link to="" onClick={handleClick}>
                        <span className="label label-primary pull-right">
                          <span className="glyphicon glyphicon-hand-up" aria-hidden="true" /> Join this classroom
                        </span>
                      </Link>
                    )
                  }
                </h3>
              </div>
              <div className="panel-body">
                {!user ?
                  (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4>{"Teacher's classroom: "}</h4>
                      </div>
                      <div className="panel-body">
                        {classroom.teacherName}
                      </div>
                    </div>
                  ) : (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4>This is your classroom</h4>
                      </div>
                    </div>
                  )
              }
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
                        searchuser(user.id) ?
                          (
                            <div className="col-md-12">
                              <ClassroomChat />
                            </div>
                          ) :
                          (
                            <div className="col-md-12">
                              Login to join this classroom
                            </div>
                          )
                      }
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>Studens joined to this classroom</h4>
                  </div>
                  <div className="panel-body">
                    {classroom.students.map((student, index) => (
                      <SimplyUser key={index} student={student} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>);
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
