// npm packages
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {CircularProgress} from 'material-ui';

// our packages
import {getOneClassRoom} from '../../store/actions';
import ClassroomChat from '../../components/classroom/ClassroomChat';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
  isLoading: state.classrooms.status === 'loading',
});

const mapDispatchToProps = dispatch => ({
  onSeeCompleteClass: params => dispatch(getOneClassRoom(params)),
});

// window.scrollTo(0, document.body.scrollHeight)

class CompleteClassroom extends Component {

  componentWillMount() {
    const {onSeeCompleteClass, routeParams} = this.props;
    onSeeCompleteClass({
      id: routeParams.id,
    });
  }

  render() {
    const {classroom, user, isLoading} = this.props;

    return (
      <div className="containerPaper">
        {isLoading ? (
          <CircularProgress className="col-xs-3 col-xs-offset-5" mode="indeterminate" style={{top: '35vh'}} />
        ) : (
          <div>
            <ClassroomChat user={user} classroom={classroom} />
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
