// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {AppBar, FontIcon, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// our packages
import NavbarDrawer from '../drawer';
import Logout from '../logout';

const mapDispatchToProps = dispatch => ({
  navToRoot: () => dispatch(push('/')),
});

const Navbar = ({currentPath, navToRoot, token}) => {
  const transformPath = (path) => {
    switch (path) {
      case '/login':
        return 'Login';
      case '/register':
        return 'Sign up';
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
      zDepth={2}
      iconElementLeft={currentPath !== '/' && currentPath !== '/home' && currentPath !== '/user' ? (
        <IconButton
          iconClassName="fa fa-angle-left"
          iconStyle={{color: 'white'}}
          onTouchTap={handleBackClick}
        />
      ) : (
        <NavbarDrawer token={token} />
      )}
      iconElementRight={
        (!token ? (
          <IconButton
            href="https://github.com/DAWZayas/Klayas"
            iconClassName="fa fa-github"
          />
        ) : (
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Profile" leftIcon={<FontIcon className="fa fa-user" />} />
            <Logout />
          </IconMenu>
        ))
      }
      style={{position: 'fixed'}}
    />
  );
};

Navbar.propTypes = {
  currentPath: PropTypes.string,
  navToRoot: PropTypes.func,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Navbar);
