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
  navToHome: () => dispatch(push('/login')),
});



const User = ({onClick, name}) => (
  <div className="jumbotron">
    <h1>Bienvenido {name}!</h1>
    <button className="btn btn-default" onClick={onClick}>Cerrar sesión</button>
    <p><Link to="/login">Home</Link></p>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
