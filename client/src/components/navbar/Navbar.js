import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {logoutAction} from '../../store/actions';

import {LoginModal} from '../../components';

const styles = require('./Navbar.scss');

const mapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(push('/login')),
  onLogoutClick: () => dispatch(logoutAction()),
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  render() {
    const {onLogoutClick, token} = this.props;
    const close = () => {
      this.setState({showModal: false});
    };

    const handleLoginClick = () => {
      this.setState({showModal: true});
    };

    const handleLogoutClick = (e) => {
      e.preventDefault();
      onLogoutClick();
    };

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
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
                  <Button bsStyle="primary" bsClass={styles.button} onClick={handleLoginClick}>
                    <span className="glyphicon glyphicon-log-in" /> Inicia sesi&oacute;n
                  </Button>
                </li>
              ) : (
                <li>
                  <Button bsStyle="primary" bsClass={styles.button} onClick={handleLogoutClick}>
                    <span className="glyphicon glyphicon-log-out" /> Cerrar sesi&oacute;n
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
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  token: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Navbar);
