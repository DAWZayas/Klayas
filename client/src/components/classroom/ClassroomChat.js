import React from 'react';
import {connect} from 'react-redux';

// our packages
import {updateClassAction} from '../../store/actions';
import LineChat from '../../components/classroom/LineChat';

const styles = require('./ClassroomChat.scss');

const mapStateToProps = state => ({
  chat: state.classrooms.specificclassroom.chat,
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onChatClick: params => dispatch(updateClassAction(params)),
});

const ClassroomChat = ({onChatClick, chat, user, classroom}) => {
  let chatInput;

  const handleClick = (e) => {
    e.preventDefault();
    onChatClick({
      id: classroom.id,
      studentname: user.name,
      studentavatar: user.avatarURL,
      studentid: user.id,
      text: chatInput.value,
    });
  };

  return (
    <div className="col-md-12">
      <div className="panel panel-primary">
        <div className="panel-heading">
          Sala de Chat
        </div>
        <div className="panel-body" style={{textAlign: 'left'}}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.td}>
                  {chat.map((line, index) => (
                    <LineChat key={index} line={line} />
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <form>
            <div className="form-group">
              <label htmlFor="inputName">What do you want to share?</label>
              <input
                type="text"
                className="form-control"
                id="inputChat"
                ref={(i) => { chatInput = i; }}
              />
            </div>
            <button type="submit" className="btn btn-default" onClick={handleClick}>Chat</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomChat);
