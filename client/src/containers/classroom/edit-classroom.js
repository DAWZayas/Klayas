// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {push} from 'react-router-redux';
import {Card, RaisedButton, TextField} from 'material-ui';

// our packages
import {updateClassAction, deleteClassAction} from '../../store/actions';

import styles from '../../components/formsFooter/FormsFooter.scss';

const mapStateToProps = state => ({
  classroom: state.classrooms.specificclassroom,
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(updateClassAction(params)),
  onDeleteClick: params => dispatch(deleteClassAction(params)),
  navToHome: () => dispatch(push('/')),
});

const EditClassroom = ({onCreateClick, onDeleteClick, navToHome, classroom, router, error}) => {
  let nameInput;
  let descriptionInput;

  const goBack = () => (router.goBack());

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.getValue(),
      description: descriptionInput.getValue(),
      id: classroom.id,
    });
    goBack();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteClick({
      id: classroom.id,
    });
    setImmediate(() => navToHome());
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
              defaultValue={classroom.description}
              ref={(i) => { descriptionInput = i; }}
            />
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-6">
            <RaisedButton label="Update" primary onTouchTap={handleClick} />
          </div>
          <div className="col-xs-6">
            <RaisedButton label="Cancel" onTouchTap={goBack} />
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-1">
            <p className={styles.divider}>or</p>
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-10 col-xs-offset-1">
            <RaisedButton label="Delete classroom" backgroundColor="#D50000" labelColor="white" onTouchTap={handleDelete} fullWidth />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClassroom);
