import React from 'react';
import {IndexLink} from 'react-router';

const styles = require('./Navbar.scss');

export default () => (
  <nav className="navbar navbar-default">
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
          <li>
            <button
              type="button"
              className={`btn btn-primary ${styles.button}`}
            >
              <span className="glyphicon glyphicon-log-in" /> Inicia sesi&oacute;n
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
