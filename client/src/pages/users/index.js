// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import {clearSesionAction} from '../../store/actions';

//our components
import Footer from './footer.js';

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

const mapDispatchToProps = (dispatch) => ({
});



const User = ({onClick, name}) => (
  <div className="jumbotron">
    <h1>Binvenido {name}!</h1>
    
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
