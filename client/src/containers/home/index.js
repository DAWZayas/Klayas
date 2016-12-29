import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const mapDispatchToProps = dispatch => ({
  onRegisterClick: () => dispatch(push('/register')),
});

const Home = ({onRegisterClick}) => {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onRegisterClick();
  };

  return (
    <div className="container-fluid">
      <section id="intro" className="row">
        <header className="col-md-8 col-md-offset-2">
          <h1>Imparte tus clases o asiste a tus favoritas desde cualquier lugar</h1>
          <h3>Klayas es la manera m&aacute;s f&aacute;cil para impartir tus clases o asistir a ellas est&eacute;s donde est&eacute;s</h3>
          <Button bsStyle="primary" bsSize="large" onClick={handleRegisterClick}> Reg&iacute;strate ya </Button>
        </header>
      </section>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Home);
