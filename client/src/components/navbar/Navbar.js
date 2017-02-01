import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {logoutAction} from '../../store/actions';

import {LoginModal} from '../../components';

const styles = require('./Navbar.scss');

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => dispatch(logoutAction()),
  navToHome: () => dispatch(push('/home')),
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  render() {
    const {onLogoutClick, navToHome, token} = this.props;
    const close = () => {
      this.setState({showModal: false});
    };

    const handleLoginClick = () => {
      this.setState({showModal: true});
    };

    const handleLogoutClick = (e) => {
      e.preventDefault();
      navToHome();
      onLogoutClick();
    };

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <IndexLink to="/" className={`navbar-brand ${styles.navbar}`}>
              <span>Klayas</span>
            </IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {!token ? (
                <li>
                  <Button bsStyle="primary" className={styles.LoginBtn} onClick={handleLoginClick}>
                    <span className="glyphicon glyphicon-log-in" /> Login
                  </Button>
                </li>
              ) : (
                <li>
                  <Button bsStyle="primary" className={styles.LoginBtn} onClick={handleLogoutClick}>
                    <span className="glyphicon glyphicon-log-out" /> Logout
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <LoginModal show={this.state.showModal} close={close} />
      </nav>
    );
  }
}

Navbar.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  navToHome: PropTypes.func.isRequired,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Navbar);
