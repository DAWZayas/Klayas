import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import {Classroom} from '../../components/classroom';
import {Arrows} from '../paginators';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user,
  search: state.classrooms.search,
});

class ClassroomSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
    };
  }

  render() {
    const {classrooms, search} = this.props;
    const {pageIndex} = this.state;
    const N_CLASSROOMS = 2;

    const filterclassrooms = [];

    for (let i = 0; i < classrooms.length; i += 1) {
      const classroom = classrooms[i];
      if (classroom.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          classroom.teacher.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          classroom.description.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        filterclassrooms.push(classroom);
      }
    }

    const classroomPage = filterclassrooms.slice(pageIndex * N_CLASSROOMS, (pageIndex * N_CLASSROOMS) + N_CLASSROOMS);
    const handleClick = (inc) => {
      this.setState({
        pageIndex: pageIndex + inc,
      });
      return false;
    };

    return (
      <div>
        {classrooms.length === 0 ? (
          <div>No classroom meets search requirements</div>
        ) : (
          <div>
            {classroomPage.map(classroom => (
              <Classroom key={classroom.id} classroom={classroom} />
            ))}
          </div>
        )}

        <Arrows click={handleClick} pageIndex={pageIndex} nClassroom={N_CLASSROOMS} classroomsLength={classrooms.length} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassroomSearchList);
