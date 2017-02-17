import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Paper} from 'material-ui';

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
      <div className="animated fadeIn">
        <Paper zDepth={3} className="containerPaper">
          <div className="container-fluid">
            <section id="intro" className="row">
              <header className="col-xs-8 col-xs-offset-2 col-lg-5 col-lg-offset-3">
                <h1>{'Share your knowledge or learn from the others'}</h1>
                <h3>Klayas is the easiest way to make your lessons or join to your favorites lessons wherever you are</h3>
                <Button bsStyle="primary" bsSize="large" onClick={open}>{' Sign in now '}</Button>
              </header>
            </section>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Home;
