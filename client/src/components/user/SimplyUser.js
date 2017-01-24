import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import moment from 'moment';

// our packages
import {getOneProfile} from '../../store/actions';

const mapStateToProps = (state, ownProps) => ({
  student: ownProps.student,
});

const mapDispatchToProps = (dispatch) => ({
  navToCompleteProfile: (id) => dispatch(push(`/user/${id}`)),
  onSeeCompleteProfileClick: params => dispatch(getOneProfile(params)),
});

const SimplyUser = ({onSeeCompleteProfileClick, navToCompleteProfile, student}) => {
  const handleSeeCompleteProfile = (e) => {
    e.preventDefault();
    onSeeCompleteProfileClick({
      id: student.studentid,
    });
    setImmediate(() => navToCompleteProfile(student.studentid));
  };

  return (
    <div className="col-md-3">
      <div className="panel panel-primary">
        <div className="panel-heading">
          {student.studentname}
        </div>
        <div className="panel-body">
          <Link to={`/user/${student.studentid}`} onClick={handleSeeCompleteProfile}>
            <span className="label label-primary pull-right">
              <span className="glyphicon glyphicon-eye-open" aria-hidden="true" /> Ver perfil completo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SimplyUser);
