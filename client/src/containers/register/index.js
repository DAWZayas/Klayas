// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Paper, RaisedButton, TextField} from 'material-ui';

// our packages
import {registerAction} from '../../store/actions';
import FormsFooter from '../../components/formsFooter';

import styles from './Register.scss';

const mapDispatchToProps = dispatch => ({
  onRegisterClick: params => dispatch(registerAction(params)),
});

const Register = ({onRegisterClick}) => {
  Register.propTypes = {
    onRegisterClick: PropTypes.func,
  };

  let nameInput;
  let surnameInput;
  let loginInput;
  let emailInput;
  let passwordInput;
  let repeatPasswordInput;

  const handleClick = (e) => {
    e.preventDefault();

    onRegisterClick({
      name: nameInput.getValue(),
      surname: surnameInput.getValue(),
      login: loginInput.getValue(),
      email: emailInput.getValue(),
      password: passwordInput.getValue(),
      passwordRepeat: repeatPasswordInput.getValue(),
    });
  };

  return (
    <Paper zDepth={3} className={styles.container}>
      <div className="row">
        <p className="h4">
          {'Create a new Klayas account now!'}
        </p>
      </div>
      <form className={styles.marTop1_5em}>
        <div className="row">
          <div className="col-xs">
            <TextField
              hintText="Your name"
              floatingLabelText="Name"
              ref={(i) => { nameInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Your surname"
              floatingLabelText="Surname"
              ref={(i) => { surnameInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Choose a username"
              floatingLabelText="Username"
              ref={(i) => { loginInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Your email address"
              floatingLabelText="Email"
              ref={(i) => { emailInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Type a strong password"
              floatingLabelText="Password"
              ref={(i) => { passwordInput = i; }}
              type="password"
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Repeat the password"
              floatingLabelText="Repeat password"
              ref={(i) => { repeatPasswordInput = i; }}
              type="password"
            />
          </div>
        </div>
        <div className={`row ${styles.marTop1_5em}`}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
            <RaisedButton label="Sing up" primary onTouchTap={handleClick} fullWidth />
          </div>
        </div>
      </form>
      <FormsFooter />
    </Paper>
  );
};

export default connect(null, mapDispatchToProps)(Register);
