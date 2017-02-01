import React, {Component} from 'react';
import {connect} from 'react-redux';

// our components
import ClassroomFollow from '../../components/classroom/ClassroomFollow';


const mapStateToProps = (state) => ({
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
    const {classrooms, user, search} = this.props;
    const {pageIndex} = this.state;


    const filterclassrooms = [];

    for (let i = 0; i < classrooms.length; i += 1){
      const classroom = classrooms[i];
      if (classroom.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          classroom.teacher.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          classroom.description.toLowerCase().indexOf(search.toLowerCase()) !== -1){
        filterclassrooms.push(classroom);
      }
   }


    const classroomPage = filterclassrooms.slice(pageIndex * 4, pageIndex * 4 + 4);
    const handleClick = (inc) => {
      this.setState({
        pageIndex: pageIndex + inc,
      });
      return false;
    };
    return (
      <div>
        {classrooms.length === 0
          ? <div>No classroom meets search requirements</div>
          : (<div className="panel-body">
            {classroomPage.map((classroom) => (
              <ClassroomFollow key={classroom.id} classroom={classroom} />
          ))}
          </div>)
        }

        <div className="btn-group col-xs-4 col-xs-offset-5" role="group">
          <button
            type="button"
            className="btn btn-default"
            disabled={pageIndex === 0}
            onClick={() => handleClick(-1)}
          >
            <span className="glyphicon glyphicon-arrow-left" />
          </button>
          <button
            type="button"
            className="btn btn-default"
            disabled={(pageIndex + 1)  * 4 >= classrooms.length}
            onClick={() => handleClick(+1)}
          >
            <span className="glyphicon glyphicon-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassroomSearchList);
