import React, {Component} from 'react';
import {Link} from 'react-router';
import moment from 'moment';

class Classroom extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {classroom} = this.props;

    const handleSeeClass = (e) => {
      e.preventDefault();
      this.setState({
        collapse: !this.state.collapse,
      });
      return false;
    };

    return (
      <div className="col-md-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            {classroom.name}
          </div>
          <div className="panel-body">
            <strong>Dia:</strong> {moment(classroom.date).locale('es').format("ll")}<br />
            <strong>Hora:</strong> {classroom.time}
          </div>
          <div className="panel-body">
          <Link to={'/classroom/'+classroom.id }>
          <span className="label label-primary pull-right">
            Ver clase completa
          </span>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Classroom;
