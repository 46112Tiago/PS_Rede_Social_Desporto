import React from 'react';
import './ConversationIdle.css'

class FriendMsg extends React.Component {
  
    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

    render() {

      return (
        <div>
            <div className='textBox'>
                <p className='friendMsg'> Some text written by the other person. </p>
            </div>
            <br/><br/><br/>
        </div>
      );
    }
  }

  export default FriendMsg