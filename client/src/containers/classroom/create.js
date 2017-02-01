// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

// our packages
import {createClassAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(createClassAction(params)),
});

const CreateClassroom = ({onCreateClick, error}) => {
  let nameInput;
  let descriptionInput;
  let urlInput;
  let dateInput;
  let timeInput;
  let publicInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.value,
      description: descriptionInput.value,
      url: urlInput.value,
      date: moment(dateInput.value).toISOString(),
      time: timeInput.value,
    });
  };

  return (
    <div className="jumbotron">
      <h2>Klayas:</h2>
      <p>{"Create new Klayas' classroom"}</p>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Classroom name:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Classroom name"
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription">Description:</label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="Description"
            ref={(i) => { descriptionInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputUrl">Url:</label>
          <input
            type="text"
            className="form-control"
            id="inputUrl"
            placeholder="Url"
            ref={(i) => { urlInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDate">{'Date'}:</label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            placeholder="Date"
            ref={(i) => { dateInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLogin">Hour:</label>
          <input
            type="time"
            className="form-control"
            id="inputTime"
            placeholder="Hour"
            ref={(i) => { timeInput = i; }}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="inputPublic">
            <input
              type="checkbox"
              id="inputPublic"
              ref={(i) => { publicInput = i; }}
            /> {'Is public'}
          </label>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Crear Clase</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClassroom);
