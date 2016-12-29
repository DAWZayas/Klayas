// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

// our packages
import {createClassAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(createClassAction(params)),
});

const CompleteClassroom = ({classroom, onCreateClick, error}) => {

  let nameInput;
  let dateInput;
  let timeInput;
  let publicInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.value,
      date: moment(dateInput.value).toISOString(),
      time: timeInput.value,
    });
  };

  return (
    <div className="col-md-12">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {classroom.name}
        </div>
        <div className="panel-body">
          <strong>Dia:</strong> {moment(classroom.date).locale('es').format('ll')}<br />
          <strong>Hora:</strong> {classroom.time}
        </div>
        <div className="panel-body" />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
