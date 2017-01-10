import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import moment from 'moment';

// our packages
import {getOneClassRoom} from '../../store/actions';

const mapStateToProps = (state, ownProps) => ({
  classroom: ownProps.classroom,
});

const mapDispatchToProps = (dispatch) => ({
  navToCompleteClass: () => dispatch(push('/classroom/complete-classroom')),
  onSeeCompleteClassClick: params => dispatch(getOneClassRoom(params)),
});

const ClassroomOwner = ({onSeeCompleteClassClick, navToCompleteClass, classroom}) => {
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
          {classroom.name}
        </div>
        <div className="panel-body">
          <strong>Dia:</strong> {moment(classroom.date).locale('es').format('ll')}<br />
          <strong>Hora:</strong> {classroom.time}
        </div>
        <div className="panel-body">
          <Link to="/classroom/complete-classroom" onClick={handleSeeCompleteClass}>
            <span className="label label-primary pull-right">
              <span className="glyphicon glyphicon-eye-open" aria-hidden="true" /> Ver clase completa
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomOwner);
