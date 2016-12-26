// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {editProfile} from '../../store/actions';

//our components
import Footer from './footer.js';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  navToHome: () => dispatch(push('/login')),
  navToProfile: () => dispatch(push('/users')),
  onEditClick: params => dispatch(editProfile(params)),
});


const Update = ({onEditClick, onClick, navToLogin, navToProfile, redirectToLogin, error, user}) => {
  let nameInput;
  let surnameInput;
  let loginInput;
  let emailInput;
  let actualPasswordInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();
    setImmediate(() => navToProfile());

    onEditClick({
      name: nameInput.value,
      surname: surnameInput.value,
      login: loginInput.value,
      email: emailInput.value,
      ActualPassword: actualPasswordInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordInputRepeat.value,
      id: user.id,
    });
  };

  if (redirectToLogin) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToLogin());
  }

  return (
    <div className="jumbotron">
      <h1>Edita tu perfil {user.name}!</h1>

      {error ? (
        <div className="alert alert-danger" role="alert">{registerErrorToMessage(error)}</div>
      ) : ''}

      <form>
        <div className="form-group">
          <label htmlFor="inputName">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            defaultValue={user.name}
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSurname">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            defaultValue={user.surname}
            ref={(i) => { surnameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLogin">Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            id="inputLogin"
            defaultValue={user.login}
            ref={(i) => { loginInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Correo electrónico:</label>
          <input
            type="text"
            className="form-control"
            id="inputLogin"
            defaultValue={user.email}
            ref={(i) => { emailInput = i; }}
          />
        </div>
        <div className="form-group">
          Si desea cambiar su contraseña rellene estos campos, sino, déjelos en blanco
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password Actual"
            ref={(i) => { actualPasswordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Nueva Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordRepeat">Vuelve a escribir la nueva password</label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordRepeat"
            placeholder="Repite la password"
            ref={(i) => { passwordInputRepeat = i; }}
          />
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Modificar perfil</button>
      </form>
      <hr />
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
