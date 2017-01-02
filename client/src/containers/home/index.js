import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

import {RegisterModal} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  render() {
    const close = () => {
      this.setState({showModal: false});
    };

    const open = () => {
      this.setState({showModal: true});
    };

    return (
      <div className="container-fluid">
        <section id="intro" className="row">
          <header className="col-xs-8 col-xs-offset-2 col-lg-5 col-lg-offset-3">
            <h1>Imparte tus clases o asiste a tus favoritas desde cualquier lugar</h1>
            <h3>Klayas es la manera m&aacute;s f&aacute;cil para impartir tus clases o asistir a ellas est&eacute;s donde est&eacute;s</h3>
            <Button bsStyle="primary" bsSize="large" onClick={open}> Reg&iacute;strate ya </Button>
          </header>
          <RegisterModal show={this.state.showModal} close={close} />
        </section>
      </div>
    );
  }
}

export default Home;
