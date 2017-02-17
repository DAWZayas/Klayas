// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import hello from 'hellojs';
import {FontIcon, RaisedButton} from 'material-ui';

// our packages
import {googleOauthAction} from '../../store/actions';
import {auth as authConfig} from '../../../config';

const mapDispatchToProps = dispatch => ({
  googleLogin: payload => dispatch(googleOauthAction(payload)),
});

const oauthButton = ({googleLogin}) => {
  oauthButton.propTypes = {
    googleLogin: PropTypes.func,
  };

  const handleGoogleClick = () => {
    hello.init({
      google: authConfig.googleClientId,
    }, {
      redirect_uri: authConfig.googleRedirectUri,
      scope: 'email',
    });

    googleLogin({provider: 'google'});
  };
  return (
    <RaisedButton
      label="Sign in with Google"
      backgroundColor="#dd4b39"
      labelColor="white"
      icon={<FontIcon className="fa fa-google-plus" />}
      style={{marginTop: '1em'}}
      onTouchTap={handleGoogleClick}
      fullWidth
    />
  );
};

export default connect(null, mapDispatchToProps)(oauthButton);
