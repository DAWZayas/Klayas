import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Avatar, Chip} from 'material-ui';

// our packages
import {getOneClassRoom, addObservable} from '../../store/actions';
import {registerClassroomObservable} from '../../store/realtime';

const mapStateToProps = (state, ownProps) => ({
  line: ownProps.line,
});

const LineChat = ({line}) => {

  return (
    <div>
      <Chip>
        <Avatar src={line.studentavatar} />
          <div style={{fontSize: 'smaller', color: 'red'}}>
            {line.studentname}
          </div>
          <div>
            {line.text}
          </div>
      </Chip>
      <br/>

    </div>
  );
};

export default connect(mapStateToProps)(LineChat);
