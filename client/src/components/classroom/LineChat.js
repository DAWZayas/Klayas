import React from 'react';
import {connect} from 'react-redux';
import {Avatar, Chip} from 'material-ui';

const mapStateToProps = (state, ownProps) => ({
  line: ownProps.line,
  user: state.auth.user,
});

const LineChat = ({line, user}) => (
  <div>
    {user.id === line.studentid ? (
      <div style={{float: 'right', clear: 'both'}} >
        <Chip>
          <Avatar src={line.studentavatar} />
          <div style={{fontSize: 'smaller', color: 'red'}}>
            {'You: '}
          </div>
          <div>
            <p>{line.text}</p>
          </div>
        </Chip>
        <br />
      </div>
    ) : (
      <div style={{float: 'left', clear: 'both'}}>
        <Chip>
          <Avatar src={line.studentavatar} />
          <div style={{fontSize: 'smaller', color: 'red'}}>
            {line.studentname}{': '}
          </div>
          <div>
            <p>{line.text}</p>
          </div>
        </Chip>
        <br />
      </div>
    ) }
  </div>
);

export default connect(mapStateToProps)(LineChat);
