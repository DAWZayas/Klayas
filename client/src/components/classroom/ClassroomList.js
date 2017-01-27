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
      questionIndex: 0,
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
       const {classrooms, user, hasMore, questionIndex} = this.props;
  // const ClassroomList = ({classrooms, user, hasMore}) => {
    return (
      <div>
        {classrooms.map((classroom, index) => (
          classroom.teacher === user.id ? <ClassroomOwner key={index} classroom={classroom} /> : null
        ))}
        <div className="btn-group col-xs-4 col-xs-offset-5" role="group">
          <button type="button" className="btn btn-default" disabled={questionIndex === 0} onClick={() => handleClick(-1)}>
            <span className="glyphicon glyphicon-arrow-left" />
          </button>
          <button type="button"
            className="btn btn-default"
            onClick={() => handleClick(+1)}>
            <span className="glyphicon glyphicon-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomList);
