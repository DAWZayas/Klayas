// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {clearSesionAction} from '../../store/actions';

//our components
import Footer from './footer.js';

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(clearSesionAction()),
  navToHome: () => dispatch(push('/login')),
});



const User = ({onClick, name}) => (
  <div className="jumbotron">
    <h1>Binvenido {name}!</h1>
    
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
