import React from 'react';
import './ConversationIdle.css'

class OwnMsg extends React.Component {
  
    render() {

      return (
        <div>
            <div className='textBox'>
                <p className='ownMsg'> Some text written by me.</p>
            </div>
            <br/><br/><br/>
        </div>
      );
    }
  }

  export default OwnMsg