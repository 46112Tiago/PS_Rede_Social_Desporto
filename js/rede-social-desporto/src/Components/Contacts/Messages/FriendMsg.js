import React from 'react';
import '../ConversationIdle.css'

const FriendMsg = (props) => {
  
    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

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