import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomOwner from '../../components/classroom/ClassroomOwner';
import {Arrows} from '../paginators';

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.userteachedclassrooms,
  user: state.auth.user,
});

class ClassroomTeachedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
    };
  }

  componentDidMount() {
    const {classrooms} = this.props;
  }
  render() {
    const {classrooms, user} = this.props;
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
          <div>Aun no has creado ninguna clase</div>
        ) : (
          <div className="panel-body">
            {classroomPage.map(classroom => (
              <ClassroomOwner key={classroom.id} classroom={classroom} />
            ))}
          </div>
        )}
        <Arrows click={handleClick} pageIndex={pageIndex} nClassroom={N_CLASSROOMS} classroomsLength={classrooms.length} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassroomTeachedList);
