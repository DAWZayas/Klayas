// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {registerAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  redirectToLogin: state.auth.redirectToLogin,
});

const mapDispatchToProps = dispatch => ({
  navToLogin: () => dispatch(push('/login')),
  onCreateClick: params => dispatch(createClassAction(params)),
});

const CreateClass = ({onCreateClick, navToLogin, redirectToLogin}) => {
  let nameInput;
  let dateInput;
  let timeInput;
  let publicInput;

  const handleClick = (e) => {
    e.preventDefault();

    onCreateClick({
      name: nameInput.value,
      date: dateInput.value,
      time: timeInput.value,
      email: publicInput.value,
    });
  };

  if (redirectToLogin) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToLogin());
  }

  return (
    <div className="jumbotron">
      <h2>Klayas:</h2>
      <p>Crea ahora tu clase en Klayas</p>

      {error ? (
        <div className="alert alert-danger" role="alert">{registerErrorToMessage(error)}</div>
      ) : ''}

      <form>
        <div className="form-group">
          <label htmlFor="inputName">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Nombre"
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputSurname">Fecha:</label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            placeholder="Fecha"
            ref={(i) => { dateInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLogin">Hora:</label>
          <input
            type="time"
            className="form-control"
            id="inputTime"
            placeholder="Hora"
            ref={(i) => { timeInput = i; }}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="inputPublic">
            <input
              type="checkbox"
              id="inputPublic"
              ref={(i) => { publicInput = i; }}
            /> Es pública
          </label>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Crear Clase</button>
      </form>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass);
