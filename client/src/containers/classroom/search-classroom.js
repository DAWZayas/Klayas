// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import ClassroomFollow from '../../components/classroom/ClassroomFollow';
import {doSearchClassroom} from '../../store/actions';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
  search: state.classrooms.search,
});

const mapDispatchToProps = (dispatch) => ({
  doSearch: params => dispatch(doSearchClassroom(params)),
});

const SearchClassroom = ({classrooms, doSearch, search}) => {
  let seachtermInput;

  const handleSearchChange = (e) => {
    e.preventDefault();
    doSearch({
      seachterm: seachtermInput.value,
    });
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3>
           Search classroom
        </h3>
      </div>

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">Type your search</span>
        <input
          type="text"
          onChange={handleSearchChange}
          className="form-control"
          placeholder="Search by classroom's name, teacher or description"
          aria-describedby="basic-addon1"
          ref={(i) => { seachtermInput = i; }}
        />
      </div>
      <div className="panel-body">
        <div>
          {classrooms.map((classroom, index) => (
            classroom.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            classroom.teacher.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            classroom.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
            ? <ClassroomFollow key={index} classroom={classroom} /> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchClassroom);
