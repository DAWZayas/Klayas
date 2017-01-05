// npm packages
import React from 'react';

import {Notifications} from '../notifications';

const style = {
  footer: {
    zIndex: 9999,
    position: 'fixed',
    bottom: '0',
    width: '90%',
  },
};

export default () => (
  <footer style={style.footer}>
    <div className="row">
      <div className="col-md-8">
        <Notifications />
      </div>
    </div>
  </footer>
);
