import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomFollow from '../../components/classroom/ClassroomFollow';
import {Arrows} from '../paginators';

const mapStateToProps = state => ({
  classrooms: state.classrooms.userfollowedclassrooms,
  user: state.auth.user,
});

class ClassroomFollowedList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
    };
  }

  render() {
    const {classrooms} = this.props;
    const {pageIndex} = this.state;
    const N_CLASSROOMS = 2;

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
          <div>Aun no sigues ninguna clase</div>
        ) : (
          <div className="panel-body">
            {classroomPage.map(classroom => (
              <ClassroomFollow key={classroom.id} classroom={classroom} />
              ))}
          </div>
        )}

        <Arrows click={handleClick} pageIndex={pageIndex} nClassroom={N_CLASSROOMS} classroomsLength={classrooms.length} />
      </div>
    );
  }
}

ClassroomFollowedList.propTypes = {
  classrooms: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string,
    ),
  ),
};

export default connect(mapStateToProps)(ClassroomFollowedList);
