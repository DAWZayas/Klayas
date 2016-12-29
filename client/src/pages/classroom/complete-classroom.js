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

const CompleteClassroom = ({onCreateClick, error}) => {
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
    <div className="jumbotron">
      hola
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
