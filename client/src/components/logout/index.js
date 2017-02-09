// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {FontIcon, MenuItem} from 'material-ui';

// our packages
import {logoutAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(push('/home')),
  onLogoutClick: () => dispatch(logoutAction()),
});

const Logout = ({close, navToHome, rightIcon, onLogoutClick}) => {
  const handleClick = (e) => {
    e.preventDefault();
    navToHome();
    onLogoutClick();
    if (close) {
      close();
    }
  };
  return (
    (!rightIcon ? (
      <MenuItem
        onTouchTap={handleClick}
        leftIcon={<FontIcon className="fa fa-sign-out" />}
      >Sign out</MenuItem>
    ) : (
      <MenuItem
        onTouchTap={handleClick}
        rightIcon={<FontIcon className="fa fa-sign-out" />}
      >Sign out</MenuItem>
    ))
  );
};

Logout.propTypes = {
  close: PropTypes.func,
  navToHome: PropTypes.func,
  rightIcon: PropTypes.bool,
  onLogoutClick: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Logout);
