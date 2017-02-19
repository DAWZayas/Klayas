import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Card, FloatingActionButton, SvgIcon, TextField} from 'material-ui';

// our packages
import {updateClassAction} from '../../store/actions';
import LineChat from '../../components/classroom/LineChat';

const styles = require('./ClassroomChat.scss');

const mapDispatchToProps = dispatch => ({
  navToLogin: () => dispatch(push('/login')),
  onChatClick: params => dispatch(updateClassAction(params)),
  onJoinClick: params => dispatch(updateClassAction(params)),
});

const ClassroomChat = ({navToLogin, onChatClick, onJoinClick, user, classroom}) => {
  let chatInput;

  const handleSendClick = (e) => {
    e.preventDefault();
    onChatClick({
      id: classroom.id,
      studentname: user.name,
      studentavatar: user.avatarURL,
      studentid: user.id,
      text: chatInput.getValue(),
    });
  };

  const handleJoinClick = (e) => {
    e.preventDefault();
    if (!user) {
      navToLogin();
    } else {
      onJoinClick({
        studentname: user.name,
        studentid: user.id,
        id: classroom.id,
      });
    }
  };

  const searchUser = (id) => {
    const isStudent = student => (student.studentid === id);

    if (classroom.teacher === id) {
      return true;
    }

    if (classroom.students.find(isStudent) === undefined) {
      return false;
    }
    return true;
  };

  const footer = (
    user && searchUser(user.id) ? (
      <form>
        <div style={{left: '5%'}}>
          <div className="col-xs-8" style={{top: 5}}>
            <TextField hintText="Write a chat message." ref={(i) => { chatInput = i; }} />
          </div>
          <div className="col-xs-1 col-xs-offset-1 pull-right" style={{top: 7, right: '10%'}}>
            <FloatingActionButton mini onTouchTap={handleSendClick} onSubmit={handleSendClick}>
              <SvgIcon>
                <path fill="#FFF" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </SvgIcon>
            </FloatingActionButton>
          </div>
        </div>
      </form>
    ) : (
      <div style={{position: 'absolute', bottom: 0, left: '5%'}}>
        <div className="col-xs-8">
          <TextField hintText="Join to write a chat message." disabled />
        </div>
        <div className="col-xs-1 col-xs-offset-1 pull-right" style={{right: '5%'}}>
          <FloatingActionButton mini onTouchTap={handleJoinClick}>
            <SvgIcon>
              <path
                fill="#FFF"
                d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"
              />
            </SvgIcon>
          </FloatingActionButton>
        </div>
      </div>
    )
  );

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.td}>
              {classroom.chat.map((line, index) => (
                <LineChat key={index} line={line} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <Card style={{height: 55, position: 'fixed', bottom: 5, textAlign: 'left', width: '96.5%'}}>
        {footer}
      </Card>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ClassroomChat);
