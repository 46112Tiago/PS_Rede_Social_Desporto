import React from 'react';
import '../ConversationIdle.css'

const FriendMsg = (props) => {

      return (
        <>
            <div className='textBox'>
                <p className='friendMsg'>{props.message}</p>
            </div>
            <br/><br/><br/>
        </>
      );
    }

  export default FriendMsg