// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {push} from 'react-router-redux';
import {Card} from 'material-ui';

// our packages
import {updateClassAction, deleteClassAction} from '../../store/actions';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  onDeleteClick: params => dispatch(deleteClassAction(params)),
  navToClassroom: () => dispatch(push('/classroom/complete-classroom')),
  navToHome: () => dispatch(push('/')),
});

const EditClassroom = ({onCreateClick, onDeleteClick, navToClassroom, navToHome, classroom, error}) => {
  let nameInput;
  let descriptionInput;

  const handleClick = (e) => {
    e.preventDefault();
    setImmediate(() => navToClassroom());
    onCreateClick({
      name: nameInput.value,
      description: descriptionInput.value,
      id: classroom.id,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setImmediate(() => navToHome());
    onDeleteClick({
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
        <button type="submit" className="btn btn-default" onClick={handleClick}>Update Classroom</button> &nbsp;| &nbsp;
        <button type="submit" className="btn btn-default" onClick={navToClassroom}>Cancel</button> &nbsp;| &nbsp;
        <button type="submit" className="btn btn-danger" onClick={handleDelete}>Delete Classroom</button>
      </form>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClassroom);
