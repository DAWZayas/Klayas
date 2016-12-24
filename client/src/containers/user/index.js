// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// our components
import Footer from './footer.js';

const mapStateToProps = (state) => ({user: state.auth.user});

const User = ({user}) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3>Bienvenido {user.name}!</h3>
    </div>
    <div className="panel-body">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Tu perfil
            <Link to="/user/edit-profile">
              <span className="label label-primary pull-right">Editar perfil</span>
            </Link>
          </h4>
        </div>
        <div className="panel-body">
          Nombre: {user.name}<br />
          Apellidos: {user.surname}<br />
          Nombre de usuario: {user.login}<br />
          Correo electrónico: {user.mail}<br />
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Tus clases
            <Link to="/user/edit-profile">
              <span className="label label-primary pull-right">Crear clase</span>
            </Link>
          </h4>
        </div>
        <div className="panel-body">
          Clases que vas a impartir: {user.name}<br />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default connect(mapStateToProps)(User);
