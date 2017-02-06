// npm packages
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {AppBar, Drawer, FontIcon, IconButton, MenuItem} from 'material-ui';

// our packages
import {logoutAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  navToRoot: () => dispatch(push('/')),
  navToLogin: () => dispatch(push('/login')),
  navToRegister: () => dispatch(push('/register')),
  onLogoutClick: () => dispatch(logoutAction()),
});

class NavbarDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const {navToRoot, navToLogin, navToRegister, onLogoutClick, token} = this.props;

    const handleTitleClick = (e) => {
      e.preventDefault();
      navToRoot();
      this.handleClose();
    };

    const handleLoginClick = (e) => {
      e.preventDefault();
      navToLogin();
      this.handleClose();
    };

    const handleLogoutClick = (e) => {
      e.preventDefault();
      onLogoutClick();
      this.handleClose();
    };

    const handleRegisterClick = (e) => {
      e.preventDefault();
      navToRegister();
      this.handleClose();
    };

    return (
      <div>
        <IconButton
          iconClassName="fa fa-bars"
          onTouchTap={this.handleToggle}
          iconStyle={{color: 'white'}}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <AppBar title="Klayas" showMenuIconButton={false} onTitleTouchTap={handleTitleClick} />
          {token ? (
            <MenuItem onTouchTap={handleLogoutClick} rightIcon={<FontIcon className="fa fa-sign-in" />}>Logout</MenuItem>
          ) : (
            <div>
              <MenuItem onTouchTap={handleLoginClick} rightIcon={<FontIcon className="fa fa-sign-in" />}>Login</MenuItem>
              <MenuItem onTouchTap={handleRegisterClick} rightIcon={<FontIcon className="fa fa-user-circle-o" />}>Sign in</MenuItem>
            </div>
          )}
          <MenuItem onTouchTap={this.handleClose} rightIcon={<FontIcon className="fa fa-users" />}>About us</MenuItem>
        </Drawer>
      </div>
    );
  }
}

NavbarDrawer.propTypes = {
  navToRoot: PropTypes.func,
  navToLogin: PropTypes.func,
  navToRegister: PropTypes.func,
  onLogoutClick: PropTypes.func,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(NavbarDrawer);
