// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {clearSesionAction} from '../../store/actions';

const mapStateToProps = (state) => ({
      token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseSessionClick: () => dispatch(clearSesionAction()),
  navToHome: () => dispatch(push('/')),
});

const Footer = ({onCloseSessionClick, navToHome, token}) => {
    if (!token) {
        // TODO: figure out a better way to do nav
        setImmediate(() => navToHome());
      }
    return (
        <div>
            <hr />
                <p><Link to="/">Home</Link> | <Link to="/users/edit-profile">Editar Perfil</Link> | <Link to="/class/create">Crear Clase</Link></p>
                <p><button className="btn btn-default" onClick={onCloseSessionClick}>Cerrar sesión</button></p>
        </div>
        );
};


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
