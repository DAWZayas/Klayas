import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

import {registerAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onRegisterClick: params => dispatch(registerAction(params)),
});

const RegisterModal = ({show, close, onRegisterClick}) => {
  let nameInput;
  let surnameInput;
  let loginInput;
  let emailInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();

    onRegisterClick({
      name: nameInput.value,
      surname: surnameInput.value,
      login: loginInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordInputRepeat.value,
    });
    close();
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputName">Name:</label>
            </div>
            <div className="col-xs-7">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Your name"
                ref={(i) => { nameInput = i; }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputSurname">Surname:</label>
            </div>
            <div className="col-xs-7">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Your surname"
                ref={(i) => { surnameInput = i; }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputLogin">Username:</label>
            </div>
            <div className="col-xs-7">
              <input
                type="text"
                className="form-control"
                id="inputLogin"
                placeholder="Username"
                ref={(i) => { loginInput = i; }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputEmail">Email address:</label>
            </div>
            <div className="col-xs-7">
              <input
                type="text"
                className="form-control"
                id="inputLogin"
                placeholder="Your email address"
                ref={(i) => { emailInput = i; }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputPassword">Password</label>
            </div>
            <div className="col-xs-7">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                ref={(i) => { passwordInput = i; }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-3 col-xs-offset-1">
              <label htmlFor="inputPasswordRepeat">Repeat password</label>
            </div>
            <div className="col-xs-7">
              <input
                type="password"
                className="form-control"
                id="inputPasswordRepeat"
                placeholder="Repeat password"
                ref={(i) => { passwordInputRepeat = i; }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-7 col-xs-offset-4">
              <Button
                type="submit"
                bsStyle="primary"
                className="btn btn-default"
                block
                onClick={handleClick}
              >
                Registrar
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(RegisterModal);
