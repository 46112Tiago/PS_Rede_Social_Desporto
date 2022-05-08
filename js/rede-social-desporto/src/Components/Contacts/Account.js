import React from 'react';
import './Contacts.css'



const Account = (props) => {

    function sendAccountId() {
      props.getConversation(2)
    }
  
      return (
        <div>
            <div className='account'>
                    <button type='button' className='btnAccount' onClick={sendAccountId}>                            
                        <img className='profileImg' src={require('./Img/default_profile.jpg')}></img> Name Surname
                    </button>
            </div>                    
        </div>
      );
    }

  export default Account