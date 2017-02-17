// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Card, FloatingActionButton, Tabs, Tab} from 'material-ui';

// our packages
import {getClassroomsByTeachedUser, getClassroomsByFollowedUser} from '../../store/actions';
import {ClassroomList} from '../../components/classroom';

import styles from './Main.scss';

const mapStateToProps = state => ({
  teachedClassrooms: state.classrooms.userteachedclassrooms,
  followedClassrooms: state.classrooms.userfollowedclassrooms,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  doUserTeachedClassRooms: params => dispatch(getClassroomsByTeachedUser(params)),
  doUserFollowedClassRooms: params => dispatch(getClassroomsByFollowedUser(params)),
});

class Main extends Component {

  componentWillMount() {
    const {user, doUserTeachedClassRooms, doUserFollowedClassRooms} = this.props;
    doUserTeachedClassRooms({
      user: user.id,
    });
    doUserFollowedClassRooms({
      user: user.id,
    });
  }

  render() {
    const {followedClassrooms, teachedClassrooms} = this.props;
    return (
      <div className={styles.container}>
        <Tabs className={styles.tabs} inkBarStyle={{background: '#F44336'}}>
          <Tab label="Created classrooms">
            <div className="animated fadeIn">
              <Card zDepth={3} className={styles.card}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-10">
                        <h4>Create new classroom</h4>
                      </div>
                      <div className="col-xs-2">
                        <Link to="/create">
                          <FloatingActionButton iconClassName="fa fa-plus" mini />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <ClassroomList classrooms={teachedClassrooms} />
                  </div>
                </div>
              </Card>
            </div>
          </Tab>

          <Tab label="Followed classrooms" >
            <div className="animated fadeIn">
              <Card zDepth={3} className={styles.card}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-10">
                        <h4>Search new classrooms</h4>
                      </div>
                      <div className="col-xs-2">
                        <Link to="/search-classroom">
                          <FloatingActionButton iconClassName="fa fa-search" mini />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <ClassroomList classrooms={followedClassrooms} />
                  </div>
                </div>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
