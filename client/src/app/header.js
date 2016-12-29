// npm packages
import React from 'react';
import {Link} from 'react-router';

import logo from './images/logo.png';

const Header = () => (
  <div className="page-header">
    <h1>Klayas <small>Las clases del Zayas</small></h1>
    <Link to="/">
      <img src={logo} alt="Logo Klayas" />
    </Link>
  </div>
);

export default (Header);
