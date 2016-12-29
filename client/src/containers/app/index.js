// npm packages
import React from 'react';

// our components
import {Navbar} from '../../components';

export default ({children}) => (
  <div className="container-fluid">
    <Navbar />
    {children}
  </div>
);
