import React from 'react';
import './StaticProfile.css'
import EditModal from '../EditProfile/EditModal';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import SportsModal from '../../SportsModal/SportsModal';
import {ImBinoculars} from 'react-icons/im'
import {FaUserFriends} from 'react-icons/fa'
import {MdEmojiEvents} from 'react-icons/md'
import {user} from '../../../Model/Model'


const StaticProfile = () => {


  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  
  const [userObj, setUser] = React.useState(user);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/3");
        const resp = await req.json();
        setUser(resp);
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
        
      }
    };

    if (!isLoading) makeRequest();
  },[]);

    return (
      <div id='Profile'>
        <div id='containerProfile'>
          <div id='leftSide'>
            <div id='imageProfile'>
              <img src={require('../Img/default_profile.jpg')} id='photoProfile'></img>
            </div>
            <div id='nameProfile'>
              <h2>{userObj.firstname} {userObj.lastname}</h2>
            </div>
            <div id='modifyProfileBtn'>
              <div id='editModal'>
                <EditModal></EditModal>
              </div>
              <div id=''>
                <DeleteAccount></DeleteAccount>
              </div>
            </div>


          </div>
          <div id='rightSide'>
            <div id='infoProfile'>
              <h3>Info:</h3>
              <p>{userObj.birthday}</p>
              <p>{userObj.city}</p>
              <p>Disponibilidade: {userObj.available}</p>
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

  export default StaticProfile