// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {AppBar, Avatar, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// our packages
import NavbarDrawer from '../drawer';
import Logout from '../logout';

const mapDispatchToProps = dispatch => ({
  navToProfile: userID => dispatch(push(`/user/${userID}`)),
});

const Navbar = ({currentPath, navToProfile, user, router, token}) => {
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
    router.goBack();
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    navToProfile(user.id);
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
            <MenuItem primaryText="Profile" leftIcon={<Avatar src={user.avatarURL} />} onTouchTap={handleProfileClick} />
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
  navToProfile: PropTypes.func,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    registrationDate: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }),
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Navbar);
