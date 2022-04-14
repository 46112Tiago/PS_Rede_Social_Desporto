import React from 'react';
import './Contacts.css'
import './Friend.css'
import { FaUser, FaUsers } from 'react-icons/fa';

class Friends extends React.Component {
  



    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */

    render() {



      return (
        <div>
            <div className='messageOption'>
                <button className='btnMessage' id='private'><FaUser></FaUser> Friends</button> 
            </div>
            <div className='messageOption'>
                <button className='btnMessage' id='group'><FaUsers></FaUsers> Groups</button>
            </div>
            <div id='contacts'>
                    <hr id='line'/>
                    <h3 id='contactsH3'>Friends:</h3> 
            </div>
        </div>
      );
    }
  }

  export default Friends