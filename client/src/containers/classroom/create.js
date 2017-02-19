// npm packages
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, RaisedButton, TextField} from 'material-ui';
import {push} from 'react-router-redux';

// our packages
import {createClassAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(createClassAction(params)),
  navToHome: () => dispatch(push('/')),
});

const CreateClassroom = ({onCreateClick, navToHome}) => {
  let nameInput;
  let descriptionInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.getValue(),
      description: descriptionInput.getValue(),
    });
    setImmediate(() => navToHome());
  };

  return (
    <div className="animated fadeIn">
      <Card className="containerPaper">
        <p>{'Create new Klayas classroom'}</p>
        <form>
          <div className="row">
            <div className="col-xs-12">
              <TextField
                hintText="Classroom name"
                floatingLabelText="Classroom name"
                ref={(i) => { nameInput = i; }}
              />
            </div>
            <div className="col-xs-12">
              <TextField
                hintText="Describe your classroom"
                floatingLabelText="Description"
                ref={(i) => { descriptionInput = i; }}
              />
            </div>
          </div>
          <div className="row marTop1_5em">
            <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
              <RaisedButton label="Create" primary onTouchTap={handleClick} fullWidth />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

CreateClassroom.propTypes = {
  onCreateClick: PropTypes.func,
  navToHome: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreateClassroom);
