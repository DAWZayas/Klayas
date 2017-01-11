// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// our packages
import {updateClassAction} from '../../store/actions';
import SimplyUser from '../../components/user/SimplyUser';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
  status: state.classrooms.status,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
});

const CompleteClassroom = ({classroom, user, onCreateClick, status}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      studentname: user.name,
      studentid: user.id,
      id: classroom.id,
    });
  };

  return (
    <div className="">
      {status === 'loading' ? (<div>Test</div>) :
        (
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>{classroom.name}
                {classroom.teacher === user.id ? (
                  <Link to="/classroom/edit-classroom">
                    <span className="label label-primary pull-right">
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Editar clase
                    </span>
                  </Link>) :
                  (
                    <Link to="" onClick={handleClick}>
                      <span className="label label-primary pull-right">
                        <span className="glyphicon glyphicon-hand-up" aria-hidden="true" /> Apuntarse a esta clase
                      </span>
                    </Link>
                  )
                }
              </h3>
            </div>
            <div className="panel-body">
              {classroom.teacher === user.id ?
                (
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4>Esta clase va a ser impartida por ti</h4>
                    </div>
                  </div>
                ) : (
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4>
                        Clase impartida por:
                      </h4>
                    </div>
                    <div className="panel-body">
                      {classroom.teacherName}
                    </div>
                  </div>
                )
            }
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>
                    Retransmisión
                  </h4>
                </div>
                <div className="panel-body">
                  <div>
                    <div className="col-md-6">
                      <iframe width="560" height="315" src={classroom.url} frameBorder="0" allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Alumnos apuntados a esta clase</h4>
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
