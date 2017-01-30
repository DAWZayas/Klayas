import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomOwner from '../../components/classroom/ClassroomOwner';


const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user,
});

class ClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomIndex: 0,
    };
  }

  componentDidMount() {
    const {classrooms} = this.props;
  }
  render() {
    const {classrooms, user} = this.props;
    const {classroomIndex} = this.state;
    const filterclassrooms = [];

    for (let i = 0; i < classrooms.length; i += 1){
      const classroom = classrooms[i];
      if (classroom.teacher == user.id){
        filterclassrooms.push(classroom);
      }
    }

    const classroom = filterclassrooms.slice(classroomIndex * 4, classroomIndex * 4 + 4);

    const handleClick = (inc) => {
      this.setState({
        classroomIndex: classroomIndex + inc,
      });
      return false;
    };

    return (
      <div>
        {filterclassrooms.length === 0
          ? <div>Aun no has creado ninguna clase</div>
          : <ClassroomOwner key={classroom.id} classroom={classroom} />
        }

        <div className="btn-group col-xs-4 col-xs-offset-5" role="group">
          <button
            type="button"
            className="btn btn-default"
            disabled={classroomIndex === 0}
            onClick={() => handleClick(-1)}
          >
            <span className="glyphicon glyphicon-arrow-left" />
          </button>
          <button
            type="button"
            className="btn btn-default"
            disabled={classroomIndex === filterclassrooms.length - 1}
            onClick={() => handleClick(+1)}
          >
            <span className="glyphicon glyphicon-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassroomList);
