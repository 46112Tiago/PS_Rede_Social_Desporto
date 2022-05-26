import React from 'react';
import './Contacts.css'



class Account extends React.Component {
  



    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

    render() {

        

      return (
        <div>
            <div className='account'>
                    <button type='button' className='btnAccount'>                            
                        <img className='profileImg' src={require('./Img/default_profile.jpg')}></img> Name Surname
                    </button>
            </div>                    
        </div>
      );
    }
  }

  export default Account