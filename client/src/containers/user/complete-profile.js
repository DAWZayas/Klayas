// npm packages
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Avatar, Card, CircularProgress} from 'material-ui';

// our packages
import {getOneProfile} from '../../store/actions';

import styles from './User.scss';

const mapStateToProps = state => ({
  userprofile: state.users.userprofile,
  status: state.users.status === 'loading',
});

const mapDispatchToProps = dispatch => ({
  getProfile: params => dispatch(getOneProfile(params)),
});

class CompleteProfile extends Component {

  componentWillMount() {
    const {getProfile, routeParams} = this.props;
    getProfile({
      id: routeParams.id,
    });
  }

  render() {
    const {userprofile, status} = this.props;
    return (
      <div className={styles.container}>
        {status ? (
          <CircularProgress className="col-xs-3 col-xs-offset-5" mode="indeterminate" style={{marginTop: '6em'}} />
        ) : (
          <Card zDepth={3} className={styles.card} style={{textAlign: 'center'}}>
            <Avatar src={userprofile.avatarURL} size={100} style={{marginTop: '0.5em'}} />
            <div className="">
              Name: {userprofile.name}<br />
              Surname: {userprofile.surname}<br />
              Username: {userprofile.login}<br />
              Email address: {userprofile.email}<br />
            </div>
          </Card>
        )}
      </div>
    );
  }
}

CompleteProfile.propTypes = {
  getProfile: PropTypes.func,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
  status: PropTypes.bool,
  // userprofile: PropTypes.shape({
  //   email: PropTypes.string,
  //   id: PropTypes.string,
  //   login: PropTypes.string,
  //   name: PropTypes.string,
  //   registrationDate: PropTypes.string,
  //   surname: PropTypes.string,
  // }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile);
