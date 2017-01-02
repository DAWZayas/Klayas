import React from 'react';
import {Modal, Button, Form, FormGroup, Col, FormControl, Checkbox} from 'react-bootstrap';

export default ({show, close}) => (
  <Modal show={show} onHide={close}>
    <Modal.Header closeButton>
      <h4>Inicia sesi&oacute;n en tu cuenta</h4>
    </Modal.Header>
    <Modal.Body>
      <div className="row">
        <div className="col-xs-6">
          <form>
            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Username" />
              <i className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <i className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="">
              <label htmlFor="remember_me">
                <input type="checkbox" value="1" name="remember_me" checked="checked" />
                <span > Recordar mis datos</span>
              </label>
              <span className="separator"> · </span>
              <a>¿Olvidaste tu contraseña?</a>
            </div>
            <Button bsStyle="primary" block>Iniciar sesi&oacute;n</Button>
          </form>
        </div>
        <div className="col-xs-1">
          <p>o</p>
        </div>
        <div className="col-xs-5">
          <Button bsStyle="link" block>
            <span className="" />
            Iniciar sesi&oacute;n con Google
          </Button>
          <Button bsStyle="link" block>Iniciar sesi&oacute;n con Github</Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);
