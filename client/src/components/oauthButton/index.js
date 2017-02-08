// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import hello from 'hellojs';
import {FontIcon, RaisedButton} from 'material-ui';

// our packages
import {loginOauthAction} from '../../store/actions';
import {auth as authConfig} from '../../../config';

const mapDispatchToProps = dispatch => ({
  oauthLogin: payload => dispatch(loginOauthAction(payload)),
});

const oauthButton = ({oauthLogin}) => {
  oauthButton.propTypes = {
    oauthLogin: PropTypes.func,
  };

  const handleGoogleClick = () => {
    hello.init({
      google: authConfig.googleClientId,
    }, {
      redirect_uri: authConfig.googleRedirectUri,
      scope: 'email',
    });

    // hello('google').login(() => {
    //   console.log(hello('google').getAuthResponse());
    //   const token = hello('google').getAuthResponse().access_token;
    //   const myHeaders = new Headers();
    //   myHeaders.append('Authorization', `Bearer ${token}`);
    //   const myInit = {method: 'GET',
    //     headers: myHeaders,
    //   };
    //   const myRequest = new Request('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', myInit);
    //   fetch(myRequest)
    //   .then(response => response.json().then(json => console.log(json), close()));
    // });

    oauthLogin({provider: 'google'});
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
