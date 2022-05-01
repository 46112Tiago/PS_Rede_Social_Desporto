import React from 'react';
import './ConversationIdle.css'
import FriendMsg from './FriendMsg';
import OwnMsg from './OwnMsg';
import InputText from './InputText';

class ConversationIdle extends React.Component {
  
    /**
     * Try write the messages using display flex column-reverse
     */

    render() {

      return (
        <div>
            <h3 id='nameConvo'>Friend/Group name</h3>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}

                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                
              </div>

            </div>
        </div>
      );
    }
  }

  export default ConversationIdle