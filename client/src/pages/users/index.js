// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our components
import Footer from './footer.js';

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

const User = ({name}) => (
  <div className="jumbotron">
    <h1>Binvenido {name}!</h1>
    <Footer />
  </div>
  );

export default connect(mapStateToProps)(User);
