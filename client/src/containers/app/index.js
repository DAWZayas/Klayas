// npm packages
import React from 'react';

// our components
import Navbar from '../../components/navbar';

export default ({children}) => (
  <div className="container">
    <Navbar />
    {children}
  </div>
);
