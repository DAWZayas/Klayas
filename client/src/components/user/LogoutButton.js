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
    <button className="btn btn-default" onClick={handleLogoutClick}>Cerrar sesión &nbsp;
    <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></button>

  );
};

export default connect(null, mapDispatchToProps)(Footer);
