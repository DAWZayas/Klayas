// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {push} from 'react-router-redux';
import {Card} from 'material-ui';

// our packages
import {updateClassAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  navToClassroom: () => dispatch(push('/classroom/complete-classroom')),
});

const EditClassroom = ({onCreateClick, navToClassroom, classroom, error}) => {
  let nameInput;
  let descriptionInput;
  let urlInput;
  let dateInput;
  let timeInput;
  let publicInput;

  const handleClick = (e) => {
    e.preventDefault();
    setImmediate(() => navToClassroom());
    onCreateClick({
      name: nameInput.value,
      description: descriptionInput.value,
      url: urlInput.value,
      date: moment(dateInput.value).toISOString(),
      time: timeInput.value,
      id: classroom.id,
    });
  };

  const d = moment(classroom.date).format('YYYY-MM-DD');

  return (
    <Card className="containerPaper">
      <h2>Klayas:</h2>
      <p>{"Edit your Klayas' classroom"}</p>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Classroom name:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            defaultValue={classroom.name}
            ref={(i) => { nameInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription">Description:</label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            defaultValue={classroom.description}
            ref={(i) => { descriptionInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputUrl">Url:</label>
          <input
            type="text"
            className="form-control"
            id="inputUrl"
            defaultValue={classroom.url}
            ref={(i) => { urlInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDate">{'Date'}:</label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            defaultValue={d}
            ref={(i) => { dateInput = i; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLogin">Hour:</label>
          <input
            type="time"
            className="form-control"
            id="inputTime"
            defaultValue={classroom.time}
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
        <button type="submit" className="btn btn-default" onClick={handleClick}>Modificar Clase</button> &nbsp;| &nbsp;
        <button type="submit" className="btn btn-default" onClick={navToClassroom}>Cancelar</button>
      </form>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClassroom);
