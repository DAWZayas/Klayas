// npm packages
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

// our packages
import OauthButton from '../../components/oauthButton';

import styles from './FormsFooter.scss';

const FormsFooter = ({type}) => (
  <div>
    <div className="row marTop1_5em">
      <div className="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-1">
        <p className={styles.divider}>or</p>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
        <OauthButton />
      </div>
    </div>

    <div className="row">
      <div className="col-md-9 col-md-offset-1">
        <hr />
      </div>
    </div>

    {type === 'login' ?
      (
        <div className="row">
          <div className="col-xs-6 pull-right">
            {"Haven't an account yet? "}<Link to="/register">Sign up now!</Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-xs-6 pull-right">
            {'Already have an account? '}<Link to="/login">Login now!</Link>
          </div>
        </div>
      )
    }
  </div>
);

FormsFooter.propTypes = {
  type: PropTypes.string,
};

export default FormsFooter;
