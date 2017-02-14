// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Card, FloatingActionButton, Tabs, Tab} from 'material-ui';

// our packages
import {getUserTeachedClassRooms, getUserFollowedClassRooms} from '../../store/actions';
import {ClassroomFollowedList, ClassroomTeachedList} from '../../components/classroom/';

import styles from './Main.scss';

const mapStateToProps = state => ({
  classrooms: state.classrooms.classrooms,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  DoUserTeachedClassRooms: params => dispatch(getUserTeachedClassRooms(params)),
  DoUserFollowedClassRooms: params => dispatch(getUserFollowedClassRooms(params)),
});

class User extends Component {
  componentWillMount() {
    const {user, DoUserTeachedClassRooms, DoUserFollowedClassRooms} = this.props;
    DoUserTeachedClassRooms({
      user: user.id,
    });
    DoUserFollowedClassRooms({
      user: user.id,
    });
  }

  render() {
    const {user, classrooms} = this.props;
    return (
      <div className={styles.container}>
        <Tabs className={styles.tabs}>
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
                    <ClassroomTeachedList />
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
                    <ClassroomFollowedList />
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
