// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Card} from 'material-ui';

// our components
import ClassroomSearchList from '../../components/classroom/ClassroomSearchList';
import {getAllClassRoom, doSearchClassroom} from '../../store/actions';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
  search: state.classrooms.search,
});

const mapDispatchToProps = dispatch => ({
  DoGetAllClassRoom: _.once(() => dispatch(getAllClassRoom())),
  doSearch: params => dispatch(doSearchClassroom(params)),
});

class SearchClassroom extends Component {


  componentWillMount() {
    const {DoGetAllClassRoom} = this.props;
    DoGetAllClassRoom();
  }

  render() {
    let searchtermInput;
    const {classrooms, doSearch, search} = this.props;

    const handleSearchChange = (e) => {
      e.preventDefault();
      doSearch({
        searchterm: searchtermInput.value,
      });
    };

    return (
      <Card className="containerPaper">
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
              ref={(i) => { searchtermInput = i; }}
            />
          </div>
          <div className="panel-body">
            <ClassroomSearchList />
          </div>
        </div>
      </Card>
    );
  }
}

  // <div>
  //   {classrooms.map((classroom, index) => (
  //     classroom.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
  //     classroom.teacher.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
  //     classroom.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
  //     ? <ClassroomFollow key={index} classroom={classroom} /> : null
  //   ))}
  // </div>

export default connect(mapStateToProps, mapDispatchToProps)(SearchClassroom);
