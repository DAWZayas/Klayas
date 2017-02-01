// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// our packages
import {updateClassAction} from '../../store/actions';
import {getOneProfile} from '../../store/actions';
import {Loader} from '../../components/loader';

const mapStateToProps = state => ({
  userprofile: state.users.userprofile,
  status: state.users.status,
});

const mapDispatchToProps = dispatch => ({
  SeeCompleteProfile: params => dispatch(getOneProfile(params)),
});

class CompleteProfile extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  const {SeeCompleteProfile, routeParams} = this.props;
  SeeCompleteProfile({
    id: routeParams.id,
  });
  }

  render() {
    const {userprofile, status} = this.props;

    return (
      <div className="">
        {status !== 'done' ? (<Loader />) :
          (
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h4>{`${userprofile.name}'s profile`}</h4>
              </div>
              <div className="panel-body">
                Name: {userprofile.name}<br />
                Surname: {userprofile.surname}<br />
                Username: {userprofile.login}<br />
                Email address: {userprofile.email}<br />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile);
