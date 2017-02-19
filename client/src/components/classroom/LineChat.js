import React from 'react';
import {connect} from 'react-redux';
import {Avatar, Card, CardHeader, CardText} from 'material-ui';

const mapStateToProps = (state, ownProps) => ({
  line: ownProps.line,
  user: state.auth.user,
});

const LineChat = ({line, user}) => {
  const message = side => (
    <Card style={{marginTop: 10, maxWidth: '20em', wordWrap: 'break-word'}}>
      <CardHeader avatar={line.studentavatar} title={`${line.studentname}: `} />
      <CardText style={{textAlign: side}}>
        {line.text}
      </CardText>
    </Card>
  );

  return (
    <div>
      {user && user.id === line.studentid ? (
        <div style={{float: 'right', clear: 'both'}} >
          {message('right')}
        </div>
      ) : (
        <div className="row" style={{float: 'left', clear: 'both'}}>
          {message('left')}
        </div>
      ) }
    </div>
  );
};

export default connect(mapStateToProps)(LineChat);
