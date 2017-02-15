// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Card} from 'material-ui';

// our components
import ClassroomSearchList from '../../components/classroom/ClassroomSearchList';
import {getAllClassroom, doSearchClassroom} from '../../store/actions';

const mapStateToProps = state => ({
  search: state.classrooms.search,
});

const mapDispatchToProps = dispatch => ({
  DoGetAllClassroom: _.once(() => dispatch(getAllClassroom())),
  doSearch: params => dispatch(doSearchClassroom(params)),
});

class SearchClassroom extends Component {


  componentWillMount() {
    const {DoGetAllClassroom} = this.props;
    DoGetAllClassroom();
  }

  render() {
    let searchtermInput;
    const {doSearch} = this.props;

    const handleSearchChange = (e) => {
      e.preventDefault();
      doSearch({
        searchterm: searchtermInput.value,
      });
    };

    return (
      <Card className="containerPaper">
        <div className="panel panel-default">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Search</span>
            <input
              type="text"
              onChange={handleSearchChange}
              className="form-control"
              placeholder="by name, teacher or description"
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
