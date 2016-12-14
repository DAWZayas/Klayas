// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {clearSesionAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  onCloseSessionClick: () => dispatch(clearSesionAction()),
  navToLogin: () => dispatch(push('/login')),
});

const Footer = ({onCloseSessionClick, navToLogin}) => {

  const handleLogoutClick = (e) => {
    e.preventDefault();
    onCloseSessionClick();
    setImmediate(() => navToLogin());
  };

  return (
    <div>
      <hr />
      <p><Link to="/">Home</Link> | <Link to="/users/edit-profile">Editar Perfil</Link> |&nbsp;
      <Link to="/class/create">Crear Clase</Link></p>
      <p><button className="btn btn-default" onClick={handleLogoutClick}>Cerrar sesión</button></p>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Footer);
