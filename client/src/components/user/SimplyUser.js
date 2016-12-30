import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import moment from 'moment';

// our packages
import {getOneClassRoom} from '../../store/actions';

const mapStateToProps = (state, ownProps) => ({
  student: ownProps.student,
});

const mapDispatchToProps = (dispatch) => ({
  navToCompleteClass: () => dispatch(push('/classroom/complete-classroom')),
  onSeeCompleteClassClick: params => dispatch(getOneClassRoom(params)),
});

const SimplyUser = ({onSeeCompleteClassClick, navToCompleteClass, student}) => {
  const handleSeeCompleteClass = (e) => {
    e.preventDefault();
    onSeeCompleteClassClick({
      id: classroom.id,
    });
    setTimeout(() => navToCompleteClass(), 500);
  };

  return (
    <div className="col-md-3">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {student.studentname}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SimplyUser);
