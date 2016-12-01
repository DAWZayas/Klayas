// npm packages
import React from 'react';

// our components
import Header from './header';

export default ({children}) => (
  <div className="container">
    <Header />
    {children}
  </div>
);
