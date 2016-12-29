import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => ({
  classroom: ownProps.classroom,
});

const mapDispatchToProps = (dispatch) => ({
  navToCompleteClass: () => dispatch(push('/classroom/complete-classroom')),
});

const ClassroomOwner = ({navToCompleteClass, classroom}) => {
  const handleSeeClass = (e) => {
    e.preventDefault();
    setImmediate(() => navToCompleteClass());
  };

  return (
    <div className="col-md-3">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {classroom.name}
        </div>
        <div className="panel-body">
          <strong>Dia:</strong> {moment(classroom.date).locale('es').format('ll')}<br />
          <strong>Hora:</strong> {classroom.time}
        </div>
        <div className="panel-body">
          <Link to="/classroom/complete-classroom" onClick={handleSeeClass}>
            <span className="label label-primary pull-right">
              Ver clase completa
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomOwner);
