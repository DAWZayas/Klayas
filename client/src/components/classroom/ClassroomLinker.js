import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomOwner from '../../components/classroom/ClassroomOwner';

const mapStateToProps = (state, ownProps) => ({
  classroom: ownProps.classroom,
  user: state.auth.user
});

const ClassroomLinker = ({classroom, user}) => {
  return (
    <div>
      {classroom.students.map((student, index) => (
        student.studentid === user.id ? <ClassroomOwner key={index} classroom={classroom} /> : null
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ClassroomLinker);
