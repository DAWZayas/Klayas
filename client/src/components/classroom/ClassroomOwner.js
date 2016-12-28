// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import Classroom from './Classroom';

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  DoGetAllClassRoom: _.once(() => dispatch(getAllClassRoom())),
});

const ClassroomOwner = ({classrooms, user}) => {

  return (

        <div>
          {classrooms.map((classroom, index) => (
            classroom.teacher === user.id ? <Classroom key={index} classroom={classroom} /> : null
          ))}
        </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomOwner);
