import React from 'react';
import './StaticProfile.css'
import EditModal from '../EditProfile/EditModal';
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
            </div>
            <div id='rightSide'>
              <div id='infoProfile'>
                <h3>Info:</h3>
                <p>DD/MM/AAAA</p>
                <p>cidade</p>
                <p>disponibilidade</p>
                <p>desportos</p>
                <EditModal></EditModal>
              </div>
              <div id='btnProfile'>
                <ul class="wrapper">
                  <li class="icon looking">
                    <span class="tooltip">Looking</span>
                    <span><ImBinoculars></ImBinoculars></span>
                  </li>
                  <li class="icon friends">
                    <span class="tooltip">Amigos</span>
                    <span><FaUserFriends></FaUserFriends></span>
                  </li>
                  <li class="icon events">
                    <span class="tooltip">Eventos</span>
                    <a href='/userEvents'><MdEmojiEvents></MdEmojiEvents></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default StaticProfile