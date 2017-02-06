// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {AppBar, IconButton} from 'material-ui';

// our packages
import NavbarDrawer from '../drawer';

const mapDispatchToProps = dispatch => ({
  navToRoot: () => dispatch(push('/')),
});


const Navbar = ({currentPath, navToRoot, token}) => {
  const transformPath = (path) => {
    switch (path) {
      case '/login':
        return 'Login';
      case '/register':
        return 'Sign in';
      default:
        return 'Klayas';
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navToRoot();
  };

  return (
    <AppBar
      title={transformPath(currentPath)}
      iconElementLeft={currentPath !== '/' && currentPath !== '/home' && currentPath !== '/user' ? (
        <IconButton
          iconClassName="fa fa-arrow-left"
          iconStyle={{color: 'white'}}
          onTouchTap={handleBackClick}
        />
      ) : (
        <NavbarDrawer token={token} />
      )}
      iconElementRight={
        (!token ?
          <IconButton
            href="https://github.com/DAWZayas/Klayas"
            iconClassName="fa fa-github"
          /> : null)
      }
    />
  );
};

Navbar.propTypes = {
  currentPath: PropTypes.string,
  navToRoot: PropTypes.func,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Navbar);
