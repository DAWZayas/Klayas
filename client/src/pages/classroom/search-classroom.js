// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import ClassroomOwner from '../../components/classroom/ClassroomOwner';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
});

const SearchClassroom = ({classrooms}) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3>
          Buscador de clases
        </h3>
      </div>
      <div className="panel-body">
        <div>
          {classrooms.map((classroom, index) => (
            <ClassroomOwner key={index} classroom={classroom} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SearchClassroom);
