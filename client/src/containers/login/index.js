// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {loginAction} from '../../store/actions';
import {loginErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
});

const Login = ({onLoginClick, token, error}) => {
  let usernameInput;
  let passwordInput;
  let rememberInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      remember: rememberInput.checked,
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Klayas:</h2>
        <p>Accede al portal o si aún no eres mienbro de Klayas, <Link to="/register">registrate</Link></p>

        {error ? (
          <div className="alert alert-danger" role="alert">{loginErrorToMessage(error)}</div>
        ) : ''}

        <form>
          <div className="form-group">
            <label htmlFor="inputUsername">Username:</label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Username"
              ref={(i) => { usernameInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              ref={(i) => { passwordInput = i; }}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="inputRemember">
              <input
                type="checkbox"
                id="inputRemember"
                ref={(i) => { rememberInput = i; }}
              /> Recordar
            </label>
          </div>
          <button type="submit" className="btn btn-default" onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
