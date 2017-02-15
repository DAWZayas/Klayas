import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontIcon, IconButton} from 'material-ui';

// our components
import ClassroomFollow from '../../components/classroom/ClassroomFollow';


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

    const classroomPage = filterclassrooms.slice(pageIndex * 4, (pageIndex * N_CLASSROOMS) + N_CLASSROOMS);
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
          <div className="panel-body">
            {classroomPage.map(classroom => (
              <ClassroomFollow key={classroom.id} classroom={classroom} />
            ))}
          </div>
        )}

        <div className="row">
          <div className="col-xs-6" style={{textAlign: 'right'}}>
            <IconButton
              iconClassName="fa fa-angle-left"
              disabled={pageIndex === 0}
              onTouchTap={() => handleClick(-1)}
            />
          </div>
          <div className="col-xs-6" style={{textAlign: 'left'}}>
            <IconButton
              iconClassName="fa fa-angle-right"
              disabled={(pageIndex + 1) * N_CLASSROOMS >= classrooms.length}
              onTouchTap={() => handleClick(+1)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ClassroomSearchList);
