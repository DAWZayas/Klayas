// npm packages
import React from 'react';

import logo from './images/logo.png';

const Header = () => (
  <div className="page-header">
    <h1>Klayas <small>Las clases del Zayas</small></h1>
    <img src={logo} alt="Logo Klayas" />
  </div>
);

export default (Header);
