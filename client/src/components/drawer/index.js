// npm packages
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {AppBar, Drawer, FontIcon, IconButton, MenuItem} from 'material-ui';

// our packages
import {logoutAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  navToRoot: () => dispatch(push('/')),
  navToHome: () => dispatch(push('/home')),
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
    const {navToRoot, navToHome, navToLogin, navToRegister, onLogoutClick, token} = this.props;

    const handleClick = (e, fn) => {
      e.preventDefault();
      if (fn === onLogoutClick) {
        navToHome();
      }
      fn();
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
          <AppBar title="Klayas" showMenuIconButton={false} onTitleTouchTap={e => handleClick(e, navToRoot)} />
          {token ? (
            <MenuItem onTouchTap={e => handleClick(e, onLogoutClick)} rightIcon={<FontIcon className="fa fa-sign-out" />}>Logout</MenuItem>
          ) : (
            <div>
              <MenuItem onTouchTap={e => handleClick(e, navToLogin)} rightIcon={<FontIcon className="fa fa-sign-in" />}>Login</MenuItem>
              <MenuItem
                onTouchTap={e => handleClick(e, navToRegister)}
                rightIcon={<FontIcon className="fa fa-user-circle-o" />}
              >Sign up</MenuItem>
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
  navToHome: PropTypes.func,
  navToLogin: PropTypes.func,
  navToRegister: PropTypes.func,
  onLogoutClick: PropTypes.func,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(NavbarDrawer);
