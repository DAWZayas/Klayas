// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our components
import {Navbar} from '../../components';
import Footer from '../../components/footer';

const mapStateToProps = state => ({
  actualPath: state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname,
  user: state.auth.user,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(push(path)),
});

class App extends React.Component {
  static propTypes = {
    token: PropTypes.string,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      registrationDate: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
    }),
    navTo: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.token !== nextProps.token) {
      if (nextProps.token) {
        return this.props.navTo('/');
      }
      return this.props.navTo('/home');
    }
  }

  render() {
    const {children, user, token} = this.props;
    return (
      <div>
        <Navbar {...this.props} />
        <div className="container">
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
