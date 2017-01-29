import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';

// our packages
import {loginAction} from '../../store/actions';

const styles = require('./LoginModal.scss');

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
});


const LoginModal = ({onLoginClick, show, close}) => {
  LoginModal.propTypes = {
    onLoginClick: PropTypes.func,
    show: PropTypes.bool,
    close: PropTypes.func,
  };

  let usernameInput;
  let passwordInput;
  let rememberInput;

  const handleLoginClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      remember: rememberInput.checked,
    });
    close();
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <h4>Login</h4>
      </Modal.Header>
      <Modal.Body>
        <div className={`row ${styles.rowDivided}`}>
          <div className="col-xs-6">
            <form>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={(i) => { usernameInput = i; }}
                  autoFocus
                />
                <i className="glyphicon glyphicon-user form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={(i) => { passwordInput = i; }}
                />
                <i className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div>
                <label htmlFor="remember_me">
                  <input type="checkbox" value="1" name="remember_me" ref={(i) => { rememberInput = i; }} />
                  <span > Remember me</span>
                </label>
                <span className="separator"> · </span>
                <a>Forgot your password?</a>
              </div>
              <Button type="submit" bsStyle="primary" block onClick={handleLoginClick}>Login</Button>
            </form>
          </div>
          <div className={styles.verticalDivider}>
            <p>or</p>
          </div>
          <div className={`col-xs-5 col-xs-offset-1 ${styles.verticalAlign}`}>
            <Button bsStyle="primary" className={styles.btnGoogle} block>
              <i className="fa fa-google fa-lg social" aria-hidden="true" /> Login with your Google account
            </Button>
            <Button bsStyle="primary" className={styles.btnGithub} block>
              <i className="fa fa-github fa-lg social" aria-hidden="true" /> Login with your Github account
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(LoginModal);
