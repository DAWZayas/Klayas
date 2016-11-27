// npm packages
import React from 'react';

//our components
import Header from './header.js';

export default ({children}) => (
  <div className="container">

  <Header />
    {children}
  </div>
);
