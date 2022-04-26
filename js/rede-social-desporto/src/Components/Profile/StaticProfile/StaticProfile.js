import React from 'react';
import './StaticProfile.css'
import EditModal from '../EditProfile/EditModal';
import SportsModal from '../../SportsModal/SportsModal';
import {ImBinoculars} from 'react-icons/im'
import {FaUserFriends} from 'react-icons/fa'
import {MdEmojiEvents} from 'react-icons/md'


class StaticProfile extends React.Component {
  
    render() {
      return (
        <div id='Profile'>
          <div id='containerProfile'>
            <div id='leftSide'>
              <div id='imageProfile'>
                <img src={require('../Img/default_profile.jpg')} id='photoProfile'></img>
              </div>
              <div id='nameProfile'>
                <h2>Name Surname</h2>
              </div>
              <div id='editModal'>
                <EditModal></EditModal>
              </div>

            </div>
            <div id='rightSide'>
              <div id='infoProfile'>
                <h3>Info:</h3>
                <p>DD/MM/AAAA</p>
                <p>cidade</p>
                <p>disponibilidade</p>
                <SportsModal></SportsModal>

              </div>
              <div id='btnProfile'>
                <div className='tooltip lookingTool'>
                    <a href='/lookingForPlayers'><ImBinoculars></ImBinoculars></a>
                    <span className="tooltiptext">Looking</span>
                </div>
                <div className='tooltip eventsTool'>
                  <a href='/userEvents'><MdEmojiEvents></MdEmojiEvents></a>                    
                  <span className="tooltiptext">Eventos</span>
                </div>
                <div className='tooltip friendsTool'>
                  <a href='/friends'><FaUserFriends></FaUserFriends></a>
                  <span className="tooltiptext friends">Amigos</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default StaticProfile