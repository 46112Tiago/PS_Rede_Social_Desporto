import React from 'react';
import '../ConversationIdle.css'

const OwnMsg = (props) => {
  
      return (
        <div>
            <div className='textBox'>
                <p className='ownMsg'>{props.message} Some text written by me.</p>
            </div>
            <br/><br/><br/>
        </div>
      );
    }

  export default OwnMsg