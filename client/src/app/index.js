// npm packages
import React from 'react';

// our components
import Header from './header';
import Footer from '../components/footer/';

export default ({children}) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
);
