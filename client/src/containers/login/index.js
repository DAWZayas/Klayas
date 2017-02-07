// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {RaisedButton, TextField} from 'material-ui';

// our packages
import {loginAction} from '../../store/actions';
import OauthButton from '../../components/oauthButton';

import styles from './Login.scss';

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
});

const Login = ({onLoginClick}) => {
  Login.propTypes = {
    onLoginClick: PropTypes.func,
  };

  let usernameInput;
  let passwordInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.getValue(),
      password: passwordInput.getValue(),
    });
  };

  return (
    <div className={styles.container}>
      <div className="row">
        <p className="h4">
          Welcome again to Klayas!
        </p>
      </div>
      <div className="row">
        <img src="../../../static/logo.png" alt="Klayas logo" width="100" height="auto" />
      </div>
      <form className={styles.marTop1_5em}>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <TextField
              hintText="Username"
              floatingLabelText="Username"
              ref={(i) => { usernameInput = i; }}
            />
          </div>
          <div className="col-md-4">
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              ref={(i) => { passwordInput = i; }}
              type="password"
            />
          </div>
        </div>
        <div className={`row ${styles.marTop1_5em}`}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
            <RaisedButton label="Login" primary onTouchTap={handleClick} fullWidth />
          </div>
        </div>
      </form>

      <div className={`row ${styles.marTop1_5em}`}>
        <div className="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-1">
          <p className={styles.divider}>or</p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <OauthButton />
        </div>
      </div>

      <div className="row">
        <div className="col-md-9 col-md-offset-1">
          <hr style={{}} />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 pull-right">
          {"Haven't an account yet? "}<Link to="/register">Register now!</Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
