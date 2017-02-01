import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {getOneClassRoom, addObservable} from '../../store/actions';
import {registerClassroomObservable} from '../../store/realtime';

const mapDispatchToProps = (dispatch) => ({
  navToCompleteClass: (id) => dispatch(push(`/classroom/${id}`)),
  onSeeCompleteClassClick: params => dispatch(getOneClassRoom(params)),
  addObservable: observable => dispatch(addObservable(observable)),
});

const SeeClassroomButton = ({onSeeCompleteClassClick, addObservable, navToCompleteClass, classroomId}) => {
  const handleSeeCompleteClass = (e) => {
    e.preventDefault();
    onSeeCompleteClassClick({
      id: classroomId,
    });
    addObservable(registerClassroomObservable(classroomId));
    setImmediate(() => navToCompleteClass(classroomId));
  };

  return (
    <Link to="/classroom/complete-classroom" onClick={handleSeeCompleteClass}>
      <span className="label label-primary pull-right">
        <span className="glyphicon glyphicon-eye-open" aria-hidden="true" /> Ver clase completa
      </span>
    </Link>
  );
};

export default connect(null, mapDispatchToProps)(SeeClassroomButton);
