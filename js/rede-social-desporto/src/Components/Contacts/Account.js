import React from 'react';
import './Contacts.css'



const Account = (props) => {

    function sendAccountId() {
      props.getConversation(props.groupId)
    }
  
      return (
        <div>
            <div className='account'>
                    <button type='button' className='btnAccount' onClick={sendAccountId}>                            
                        <img className='profileImg' src={require('./Img/default_profile.jpg')}></img> {props.groupName}
                    </button>
            </div>                    
        </div>
      );
    }

  export default Account