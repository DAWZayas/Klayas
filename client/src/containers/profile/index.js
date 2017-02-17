// npm packages
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Avatar, Card, CircularProgress, RaisedButton, TextField} from 'material-ui';

// our packages
import {editProfile, getOneProfile} from '../../store/actions';

import styles from './Profile.scss';

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.users.status === 'loading',
});

const mapDispatchToProps = dispatch => ({
  getProfile: params => dispatch(getOneProfile(params)),
  onEditClick: params => dispatch(editProfile(params)),
});

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {editing: false};
  }

  componentWillMount() {
    const {getProfile, routeParams} = this.props;
    getProfile({
      id: routeParams.id,
    });
  }

  render() {
    const {editing} = this.state;
    const {onEditClick, user, status} = this.props;

    let nameInput;
    let surnameInput;
    let emailInput;
    let actualPasswordInput;
    let passwordInput;
    let passwordInputRepeat;

    const handleEditButtonTouchTap = () => {
      this.setState({editing: true});
    };

    const handleRequestCancelSettings = () => {
      this.setState({editing: false});
    };

    const handleRequestUpdateProfile = () => {
      onEditClick({
        name: nameInput.getValue(),
        surname: surnameInput.getValue(),
        email: emailInput.getValue(),
        actualPassword: actualPasswordInput.getValue(),
        password: passwordInput.getValue(),
        passwordRepeat: passwordInputRepeat.getValue(),
        id: user.id,
      });
      handleRequestCancelSettings();
    };

    const content = !editing ? (
      <div>
        <div className={styles.userData}>
          <span className={styles.rowHeader}>Name</span>: {user.name}<br />
          <span className={styles.rowHeader}>Surname</span>: {user.surname}<br />
          <span className={styles.rowHeader}>Username</span>: {user.login}<br />
          <span className={styles.rowHeader}>Email address</span>: {user.email}<br />
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <RaisedButton label="Edit profile" primary fullWidth onTouchTap={handleEditButtonTouchTap} />
          </div>
        </div>
      </div>
    ) : (
      <form className={styles.editProfileForm}>
        <div className="row">
          <div className="col-xs">
            <TextField
              hintText="Your name"
              floatingLabelText="Name"
              defaultValue={user.name}
              ref={(i) => { nameInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Your surname"
              floatingLabelText="Surname"
              defaultValue={user.surname}
              ref={(i) => { surnameInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Your surname"
              floatingLabelText="Username"
              defaultValue={user.login}
              disabled
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Your email address"
              floatingLabelText="Email"
              defaultValue={user.email}
              ref={(i) => { emailInput = i; }}
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Type your actual password"
              floatingLabelText="Actual password"
              ref={(i) => { actualPasswordInput = i; }}
              type="password"
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Type a strong password"
              floatingLabelText="Password"
              ref={(i) => { passwordInput = i; }}
              type="password"
            />
          </div>
          <div className="col-xs">
            <TextField
              hintText="Repeat the password"
              floatingLabelText="Repeat password"
              ref={(i) => { passwordInputRepeat = i; }}
              type="password"
            />
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-6">
            <RaisedButton label="Update" primary onTouchTap={handleRequestUpdateProfile} />
          </div>
          <div className="col-xs-6">
            <RaisedButton label="Cancel" backgroundColor="#C62828" labelColor="white" onTouchTap={handleRequestCancelSettings} />
          </div>
        </div>
      </form>
    );

    return (
      <div className="animated fadeIn">
        <div className={styles.container}>
          {status ? (
            <CircularProgress className="col-xs-3 col-xs-offset-5" mode="indeterminate" style={{marginTop: '6em'}} />
          ) : (
            <Card zDepth={3} className={styles.card} style={{textAlign: 'center'}}>
              <Avatar src={user.avatarURL} size={100} style={{marginTop: '0.5em'}} />
              {content}
            </Card>
          )}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
