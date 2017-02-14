// npm packages
import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Card, DatePicker, RaisedButton, TextField, TimePicker} from 'material-ui';

// our packages
import {createClassAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onCreateClick: params => dispatch(createClassAction(params)),
});

const CreateClassroom = ({onCreateClick, error}) => {
  let nameInput;
  let descriptionInput;
  let urlInput;
  let dateInput;
  let timeInput;

  const handleClick = (e) => {
    e.preventDefault();
    onCreateClick({
      name: nameInput.getValue(),
      description: descriptionInput.getValue(),
      url: urlInput.getValue(),
      date: moment(dateInput.value).toISOString(),
      time: timeInput.getValue(),
    });
  };

  return (
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
          <div className="col-xs-12">
            <TextField
              hintText="Url"
              floatingLabelText="Url"
              ref={(i) => { urlInput = i; }}
            />
          </div>
          <div className="col-xs-12">
            <DatePicker hintText="Start date" ref={(i) => { dateInput = i; }} />
          </div>
          <div className="col-xs-12">
            <TimePicker hintText="Hour" format="24hr" ref={(i) => { timeInput = i; }} />
          </div>
        </div>
        <div className="row marTop1_5em">
          <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
            <RaisedButton label="Create" primary onTouchTap={handleClick} fullWidth />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default connect(null, mapDispatchToProps)(CreateClassroom);
