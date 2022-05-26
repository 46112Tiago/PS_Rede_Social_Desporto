import React from 'react';
import './Contacts.css'
import './Groups.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import {BsFillPlusCircleFill} from 'react-icons/bs';

class Groups extends React.Component {
  



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
                      <h3 id='contactsH3'>Groups:</h3>
                      <button id='addBtn'>Create Group <BsFillPlusCircleFill></BsFillPlusCircleFill></button> 
              </div>
          </div>
        );
    }
  }

  export default Groups