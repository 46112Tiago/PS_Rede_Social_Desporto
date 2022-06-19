import React from 'react';
import '../ConversationIdle.css'

const OwnMsg = (props) => {
  
      return (
        <>
            <div className='textBox'>
                <p className='ownMsg'>{props.message}</p>
            </div>
            <br/><br/><br/>
        </>
      );
    }

  export default OwnMsg