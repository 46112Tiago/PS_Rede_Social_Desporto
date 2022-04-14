import React from 'react';
import './ConversationIdle.css'

class InputText extends React.Component {
  
    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

    render() {

      return (
        <div>
            <input type={'text'} id='inputTxt' placeholder='Write your message'></input>
        </div>
      );
    }
  }

  export default InputText