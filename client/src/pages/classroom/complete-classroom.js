// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router';

// our packages
import {createClassAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(createClassAction(params)),
});

const CompleteClassroom = ({classroom, onCreateClick, error}) => {

  let nameInput;
  let dateInput;
  let timeInput;
  let publicInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.value,
      date: moment(dateInput.value).toISOString(),
      time: timeInput.value,
    });
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3>{classroom.name}!
        <Link to="/classroom/edit-classroom">
          <span className="label label-primary pull-right">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Editar clase
          </span>
        </Link></h3>
      </div>
      <div className="panel-body">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              Descripción
            </h4>
          </div>
          <div className="panel-body">
            {classroom.description}
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              Retransmisión
            </h4>
          </div>
          <div className="panel-body">
            <div>
              <div className="col-md-6">
                <iframe width="560" height="315" src={classroom.url} frameBorder="0" allowFullScreen />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteClassroom);
