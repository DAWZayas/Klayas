import React from 'react';

import loader from 'static/loader.gif';

const Loader = () => {

  return (
    <div className="col-md-3">
      <img src={loader} alt="Loader" height="42" width="42" />
    </div>
  );
};

export default (Loader);
