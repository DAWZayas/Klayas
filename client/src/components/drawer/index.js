// npm packages
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {AppBar, Drawer, FontIcon, IconButton, MenuItem} from 'material-ui';

// our packages
import Logout from '../logout';

const mapDispatchToProps = dispatch => ({
  navToRoot: () => dispatch(push('/')),
  navToHome: () => dispatch(push('/home')),
});

class NavbarDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    const {navToRoot, token} = this.props;

    const handleClick = (e, fn) => {
      e.preventDefault();
      fn();
      this.handleClose();
    };

    const content = (
      token ? (
        <div>
          <Link to="/create">
            <MenuItem rightIcon={<FontIcon className="fa fa-plus" />}>New classroom</MenuItem>
          </Link>
          <Link to="/search-classroom">
            <MenuItem rightIcon={<FontIcon className="fa fa-search" />}>Find classrooms</MenuItem>
          </Link>
          <MenuItem onTouchTap={this.handleClose} rightIcon={<FontIcon className="fa fa-users" />}>About us</MenuItem>
          <Logout close={this.handleClose} rightIcon />
        </div>
      ) : (
        <div>
          <Link to="/login">
            <MenuItem rightIcon={<FontIcon className="fa fa-sign-in" />}>Login</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem rightIcon={<FontIcon className="fa fa-user-circle-o" />}>Sign up</MenuItem>
          </Link>
          <MenuItem onTouchTap={this.handleClose} rightIcon={<FontIcon className="fa fa-users" />}>About us</MenuItem>
        </div>
      )
    );

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
          {content}
        </Drawer>
      </div>
    );
  }
}

NavbarDrawer.propTypes = {
  navToRoot: PropTypes.func,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(NavbarDrawer);
