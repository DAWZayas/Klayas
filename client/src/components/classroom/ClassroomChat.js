import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

// our packages
import SeeClassroomButton from './SeeClassroomButton';
import {updateClassAction} from '../../store/actions';

const styles = require('../../../styles/ClassroomChat.scss');


const mapStateToProps = (state) => ({
  chat: state.classrooms.specificclassroom.chat,
  classroom: state.classrooms.specificclassroom,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onChatClick: params => dispatch(updateClassAction(params)),
});

const ClassroomChat = ({onChatClick, chat, user, classroom}) => {
  let chatInput;

  const handleClick = (e) => {
    e.preventDefault();
    onChatClick({
      id: classroom.id,
      studentname: user.name,
      studentid: user.id,
      text: chatInput.value,
      date: moment(),
    });
  };

  return (
    <div className="col-md-3">
      <div className="panel panel-primary">
        <div className="panel-heading">
          Sala de Chat
        </div>
        <div className="panel-body">
          <table className={styles.table}>
           <tbody>
            <tr>
              <td className={styles.td}>
                <p>Aquí va todas las conversaciones</p>
                <p>Aquí va todas las conversaciones</p>
                <p>Aquí va todas las conversaciones</p>
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
        <div className="panel-body">
          <SeeClassroomButton />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomChat);
