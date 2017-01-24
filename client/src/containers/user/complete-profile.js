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
                <h4>
                  Perfil de {userprofile.name}
                </h4>
              </div>
              <div className="panel-body">
                Nombre: {userprofile.name}<br />
                Apellidos: {userprofile.surname}<br />
                Nombre de usuario: {userprofile.login}<br />
                Correo electrónico: {userprofile.email}<br />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile);
