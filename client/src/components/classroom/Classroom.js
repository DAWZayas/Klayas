// npm packages
import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {MenuItem} from 'material-ui';

// our packages
import {addObservable} from '../../store/actions';
import {registerClassroomObservable} from '../../store/realtime';

const mapDispatchToProps = dispatch => ({
  navToCompleteClass: id => dispatch(push(`/classroom/${id}`)),
  addObservable: observable => dispatch(addObservable(observable)),
});

const Classroom = ({classroom, navToCompleteClass}) => {
  const handleSeeCompleteClass = (e) => {
    e.preventDefault();
    addObservable(registerClassroomObservable(classroom.id));
    navToCompleteClass(classroom.id);
  };

  return (
    <div className="row">
      <div className="col-xs-12">
        <MenuItem primaryText={classroom.name} onTouchTap={handleSeeCompleteClass} />
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Classroom);
