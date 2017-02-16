import React, {Component} from 'react';
import {connect} from 'react-redux';

// our packages
import {getOneClassRoom, addObservable} from '../../store/actions';
import {registerClassroomObservable} from '../../store/realtime';

const mapStateToProps = (state, ownProps) => ({
  line: ownProps.line,
});

const LineChat = ({line}) => {

  return (
    <div>
      {line.studentname}: {line.text}
    </div>
  );
};

export default connect(mapStateToProps)(LineChat);
