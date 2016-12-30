// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {editProfile} from '../../store/actions';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  navToHome: () => dispatch(push('/login')),
  onEditClick: params => dispatch(editProfile(params)),
});


const Update = ({onEditClick, onClick, navToLogin, redirectToLogin, error, user}) => {
  let nameInput;
  let surnameInput;
  let loginInput;
  let emailInput;
  let actualPasswordInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();

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
    <div className="container">
      <div className="jumbotron">
        <h1>Edita tu perfil {user.name}!</h1>

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
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
