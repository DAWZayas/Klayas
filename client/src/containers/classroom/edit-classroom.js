// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {push} from 'react-router-redux';
import {Card, RaisedButton, TextField} from 'material-ui';

// our packages
import {updateClassAction} from '../../store/actions';
import {registerErrorToMessage} from '../../util';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  navToClassroom: () => dispatch(push('/classroom/complete-classroom')),
});

const EditClassroom = ({onCreateClick, navToClassroom, classroom, error}) => {
  let nameInput;
  let descriptionInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.getValue(),
      description: descriptionInput.getValue(),
      id: classroom.id,
    });
    navToClassroom();
  };

  return (
    <Card className="containerPaper">
      <p>{"Edit your Klayas' classroom"}</p>
      <form>
        <div className="row">
          <div className="col-xs-12">
            <TextField
              hintText="Change your classroom name"
              floatingLabelText="Classroom name"
              defaultValue={classroom.name}
              ref={(i) => { nameInput = i; }}
            />
          </div>
          <div className="col-xs-12">
            <TextField
              hintText="Change the description"
              floatingLabelText="Description"
              ref={(i) => { descriptionInput = i; }}
            />
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-6">
            <RaisedButton label="Update" primary onTouchTap={handleClick} />
          </div>
          <div className="col-xs-6">
            <RaisedButton label="Cancel" backgroundColor="#C62828" labelColor="white" onTouchTap={navToClassroom} />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClassroom);
