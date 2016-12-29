// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

// our packages
import {getAllClassRoom} from '../../store/actions';

// our components
import LogoutButton from '../../components/user/LogoutButton';
import ClassroomOwner from '../../components/classroom/ClassroomOwner';

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  DoGetAllClassRoom: _.once(() => dispatch(getAllClassRoom())),
});

const User = ({user, classrooms, DoGetAllClassRoom}) => {
  DoGetAllClassRoom();

  return (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3>Bienvenido {user.name}!
      <span className="label label-primary pull-right">
        <LogoutButton />
      </span></h3>
    </div>
    <div className="panel-body">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>
            Tu perfil
            <Link to="/users/edit-profile">
              <span className="label label-primary pull-right">
                Editar perfil
              </span>
            </Link>
          </h4>
        </div>
        <div className="panel-body">
          Nombre: {user.name}<br />
          Apellidos: {user.surname}<br />
          Nombre de usuario: {user.login}<br />
          Correo electrónico: {user.email}<br />
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>
            Clases que vas a impartir, {user.name}
            <Link to="/class/create">
              <span className="label label-primary pull-right">
                Crear clase
              </span>
            </Link>
          </h4>
        </div>
        <div className="panel-body">
          <div>
            {classrooms.map((classroom, index) => (
              classroom.teacher === user.id ? <ClassroomOwner key={index} classroom={classroom} /> : null
            ))}
          </div>

        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>
            Clases que sigues
            <Link to="/users/edit-profile">
              <span className="label label-primary pull-right">
                Buscar Clases
              </span>
            </Link>
          </h4>
        </div>
        <div className="panel-body">
          Clases que estas siguiendo: {user.name}<br />
        </div>
      </div>
    </div>
  </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
