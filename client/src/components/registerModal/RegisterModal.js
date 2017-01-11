import React from 'react';
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default ({show, close}) => (
  <Modal show={show} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close}>Close</Button>
    </Modal.Footer>
  </Modal>
);
