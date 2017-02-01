import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import hello from 'hellojs';

// our packages
import {loginAction, loginOauthAction} from '../../store/actions';
import {client as clientConfig, oauthId} from '../../../config';

const styles = require('./LoginModal.scss');

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
  oauthLogin: payload => dispatch(loginOauthAction(payload)),
});

const LoginModal = ({onLoginClick, show, close, oauthLogin}) => {
  LoginModal.propTypes = {
    onLoginClick: PropTypes.func,
    show: PropTypes.bool,
    close: PropTypes.func,
    oauthLogin: PropTypes.func,
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

  const handleGoogleClick = () => {
    hello.init({
      google: oauthId.googleID,
    }, {
      redirect_uri: clientConfig.host === 'localhost' ?
        `http://${clientConfig.host}:${clientConfig.port}/redirect.html` :
        `http://${clientConfig.host}/redirect.html`,
      scope: 'email',
    });

    // hello('google').login(() => {
    //   console.log(hello('google').getAuthResponse());
    //   const token = hello('google').getAuthResponse().access_token;
    //   const myHeaders = new Headers();
    //   myHeaders.append('Authorization', `Bearer ${token}`);
    //   const myInit = {method: 'GET',
    //     headers: myHeaders,
    //   };
    //   const myRequest = new Request('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', myInit);
    //   fetch(myRequest)
    //   .then(response => response.json().then(json => console.log(json), close()));
    // });

    oauthLogin({provider: 'google'});
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
            <Button bsStyle="primary" bsSize="small" className={styles.btnGoogle} onClick={handleGoogleClick}>
              <i className="fa fa-google fa-lg social" aria-hidden="true" /> Login with Google
            </Button>
            <Button bsStyle="primary" bsSize="small" className={styles.btnGithub}>
              <i className="fa fa-github fa-lg social" aria-hidden="true" /> Login with Github
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(LoginModal);
