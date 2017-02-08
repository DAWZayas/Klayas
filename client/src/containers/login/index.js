// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Paper, RaisedButton, TextField} from 'material-ui';

// our packages
import {loginAction} from '../../store/actions';
import FormsFooter from '../../components/formsFooter';

const styles = {
  marTop1_5em: {marginTop: '1.5em'},
};

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
    <Paper zDepth={3} className="containerPaper">
      <div className="row">
        <p className="h4">
          Welcome again to Klayas!
        </p>
      </div>
      <div className="row">
        <img src="../../../static/logo.png" alt="Klayas logo" width="100" height="auto" />
      </div>
      <form style={styles.marTop1_5em}>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <TextField
              hintText="Your username"
              floatingLabelText="Username"
              ref={(i) => { usernameInput = i; }}
            />
          </div>
          <div className="col-md-4">
            <TextField
              hintText="Type your password"
              floatingLabelText="Password"
              ref={(i) => { passwordInput = i; }}
              type="password"
            />
          </div>
        </div>
        <div className="row" style={styles.marTop1_5em}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
            <RaisedButton label="Login" primary onTouchTap={handleClick} fullWidth />
          </div>
        </div>
      </form>
      <FormsFooter type="login" />
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
