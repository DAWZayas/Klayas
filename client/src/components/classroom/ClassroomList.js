import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomOwner from '../../components/classroom/ClassroomOwner';


const mapStateToProps = (state, ownProps) => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user,
  hasMore: 'yes',
});

const mapDispatchToProps = (dispatch) => ({
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


    // loadMore({
    //   skip: classrooms.length,
    //   limit: 10,
    // });
  }
    render() {
       const {classrooms, user, hasMore} = this.props;
       const {classroomIndex} = this.state;

       const classroom = classrooms[classroomIndex];
       console.log(classroom);

       const handleClick = (inc) => {

      this.setState({
        classroomIndex: classroomIndex + inc,
      });

      return false;
    };
  // const ClassroomList = ({classrooms, user, hasMore}) => {
    return (
      <div>

        {!hasMore && classrooms.length === 0 ? <div>No questions yet!</div> : null}
        {classroomIndex > classrooms.length ? "hola" : classroom ? <ClassroomOwner onLoad={() => handleClick(+1)} key={classroom.id} classroom={classroom} /> : classrooms.length > 0 ? 'No more questions' : null}
         <div className="btn-group col-xs-4 col-xs-offset-5" role="group">
          <button type="button"
            className="btn btn-default"
            disabled={classroomIndex === 0}
            onClick={() => handleClick(-1)}>
            <span className="glyphicon glyphicon-arrow-left" />
          </button>
          <button type="button"
            className="btn btn-default"
            disabled={classroomIndex === classrooms.length - 1}
            onClick={() => handleClick(+1)}>
            <span className="glyphicon glyphicon-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomList);
