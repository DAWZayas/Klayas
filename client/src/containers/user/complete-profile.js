// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// our packages
import {updateClassAction} from '../../store/actions';
import SimplyUser from '../../components/user/SimplyUser';
import {getOneClassRoom} from '../../store/actions';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
  status: state.classrooms.status,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  onSeeCompleteClass: params => dispatch(getOneClassRoom(params)),
});

class CompleteProfile extends Component {

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

    return (
      <div className="">
        {status !== 'done' ? (<div>Test</div>) :
          (
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3>{classroom.name}
                  {!user ? (
                    <Link to="/home">
                      <span className="label label-primary pull-right">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                        Ingresa a Klayas para seguir las clases
                      </span>
                    </Link>) :
                    classroom.teacher === user.id ? (
                      <Link to="/edit-classroom">
                        <span className="label label-primary pull-right">
                          <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
                          Editar clase
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
                {!user ?
                  (
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
                  ) : (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4>Esta clase va a ser impartida por ti</h4>
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
                      {!user ?
                        (
                          <div className="col-md-6">
                            Para seguir las clase es necesario estar logueado
                          </div>
                        ) : (
                          <div className="col-md-6">
                            <iframe width="560" height="315" src={classroom.url} frameBorder="0" allowFullScreen />
                          </div>
                        )
                      }
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
      </div>);
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile);
