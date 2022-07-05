import React from 'react';
import './Contacts.css'



const Account = (props) => {
      
  const name = props.lastname ? props.name + " " + props.lastname : props.name

    function sendAccountName() {
      props.getName(name)
      props.getConversation(props.accountName)
    }

    function sendAccountId() {
      props.getName(name)
      props.getConversation(props.accountId)
    }

      return (
        <div>
            <div className='account'>
                    <button type='button' className='btnAccount' onClick={props.accountId ? sendAccountId : sendAccountName }>                            
                        <img className='profileImg' src={require('./Img/user.jpeg')}></img> {name}
                    </button>
            </div>                    
        </div>
      );
    }

  export default Account