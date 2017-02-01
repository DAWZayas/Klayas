// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {editProfile} from '../../store/actions';


const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  navToHome: () => dispatch(push('/login')),
  navToProfile: () => dispatch(push('/user')),
  onEditClick: params => dispatch(editProfile(params)),
});


const Update = ({onEditClick, onClick, navToLogin, navToProfile, redirectToLogin, error, user}) => {
  let nameInput;
  let surnameInput;
  let loginInput;
  let emailInput;
  let actualPasswordInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();
    setImmediate(() => navToProfile());

    onEditClick({
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      ActualPassword: actualPasswordInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordInputRepeat.value,
      id: user.id,
    });
  };

  if (redirectToLogin) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToLogin());
  }

  return (
    <div className="jumbotron">
      <h1>{user.name}, edit your profile</h1>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            defaultValue={user.name}
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSurname">Surname:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            defaultValue={user.surname}
            ref={(i) => { surnameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLogin">{'Username: '}</label>
          <input
            type="text"
            className="form-control"
            readOnly="readonly"
            defaultValue={user.login}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">{'Email address: '}</label>
          <input
            type="text"
            className="form-control"
            id="inputLogin"
            defaultValue={user.email}
            ref={(i) => { emailInput = i; }}
          />
        </div>
        <div className="form-group">
          {'Type your actual password and the new one if you want to change it.'}
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Actual password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Actual password"
            ref={(i) => { actualPasswordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">New Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="New password"
            ref={(i) => { passwordInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPasswordRepeat">{'Repeat new password'}</label>
          <input
            type="password"
            className="form-control"
            id="inputPasswordRepeat"
            placeholder="Repeat new password"
            ref={(i) => { passwordInputRepeat = i; }}
          />
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Update your profile</button> {' '};
        <button type="submit" className="btn btn-default" onClick={navToProfile}>Cancel</button>
      </form>
      <hr />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
