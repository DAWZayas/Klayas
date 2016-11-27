// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {clearSesionAction} from '../../store/actions';

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(clearSesionAction()),
});

const Footer = ({onClick}) => (
  <div>
  <hr />
    <p><Link to="/">Home</Link> | <Link to="/users/edit-profile">Editar Perfil</Link> | <Link to="/class/create">Crear Clase</Link></p>
    <p><button className="btn btn-default" onClick={onClick}>Cerrar sesión</button></p>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
