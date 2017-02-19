import React, {Component, PropTypes} from 'react';

// our components
import {Classroom} from '../../components/classroom';
import {Arrows} from '../paginators';

class ClassroomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
    };
  }

  render() {
    const {classrooms} = this.props;
    const {pageIndex} = this.state;
    const N_CLASSROOMS = 8;

    const classroomPage = classrooms.slice(pageIndex * N_CLASSROOMS, (pageIndex * N_CLASSROOMS) + N_CLASSROOMS);
    const handleClick = (inc) => {
      this.setState({
        pageIndex: pageIndex + inc,
      });
      return false;
    };
    return (
      <div>
        {classrooms.length === 0 ? (
          <div style={{padding: 15}}>Not classrooms yet</div>
        ) : (
          <div style={{position: 'relative', width: '100%', height: '65vh'}}>
            {classroomPage.map(classroom => (
              <Classroom key={classroom.id} classroom={classroom} />
            ))}
            <Arrows click={handleClick} pageIndex={pageIndex} nClassroom={N_CLASSROOMS} classroomsLength={classrooms.length} />
          </div>
        )}

      </div>
    );
  }
}

ClassroomList.propTypes = {
  classrooms: PropTypes.array,
};

export default ClassroomList;
