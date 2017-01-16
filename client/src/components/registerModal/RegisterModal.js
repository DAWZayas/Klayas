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
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group">
            <label htmlFor="inputName">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre"
              ref={(i) => { nameInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputSurname">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Apellidos"
              ref={(i) => { surnameInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputLogin">Nombre de usuario:</label>
            <input
              type="text"
              className="form-control"
              id="inputLogin"
              placeholder="Nombre de usuario"
              ref={(i) => { loginInput = i; }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Correo electrónico:</label>
            <input
              type="text"
              className="form-control"
              id="inputLogin"
              placeholder="Correo electrónico"
              ref={(i) => { emailInput = i; }}
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
          <div className="form-group">
            <label htmlFor="inputPasswordRepeat">Vuelve a escribir la password</label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordRepeat"
              placeholder="Repite la password"
              ref={(i) => { passwordInputRepeat = i; }}
            />
          </div>
          <Button type="submit" className="btn btn-default" onClick={handleClick}>Registrar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(RegisterModal);
