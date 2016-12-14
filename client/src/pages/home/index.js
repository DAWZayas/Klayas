import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// our packages
import {helloWorldAction} from '../../store/actions';
import Login from '../login';

const mapStateToProps = (state) => ({
  world: state.helloWorld.world,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(helloWorldAction()),
});


const Home = ({onClick, world}) => (
  <div>
    <Login />
    <button>Registrate</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
