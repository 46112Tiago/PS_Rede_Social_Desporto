import React from 'react';
import './StaticProfile.css'
import EditModal from '../EditProfile/EditModal';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import SportsModal from '../../SportsModal/SportsModal';
import {ImBinoculars} from 'react-icons/im'
import {FaUserFriends} from 'react-icons/fa'
import {MdEmojiEvents} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { convertHexToImage } from '../../../Functions/Functions';


const StaticProfile = () => {

  const editResponse = (data) => {
    setEdit(data)
  } 

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [userObj, setUser] = React.useState({});
  const [imageObj, setProfileImage] = React.useState({});
  const [edit, setEdit] = React.useState(false)
  const {user,getAccessTokenSilently} = useAuth0()
  const myHeaders = new Headers()

  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const token = await getAccessTokenSilently()
        myHeaders.append('Authorization',`Bearer ${token}`)
        const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
        };
        const req =  await fetch(`http://localhost:8080/user/${window.name}`,options);
        const resp = await req.json();
        const byteArray = convertHexToImage(resp.profilepic)
        let img = document.getElementById('photoProfile');
        img.src = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
        setUser(resp);
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
        
      }
    };

    if (!isLoading) makeRequest();
  },[edit]);

    return (
      <div id='Profile'>
        <div id='containerProfile'>
          <div id='leftSide'>
            <div id='imageProfile'>
              <img src={require('../Img/default_profile.jpg')} id='photoProfile'></img>
            </div>
            <div id='nameProfile'>
              <h2>{userObj.firstName} {userObj.lastName}</h2>
            </div>
            <div id='modifyProfileBtn'>
              <div id='editModal'>
                <EditModal edit={editResponse}></EditModal>
              </div>
              <div>
                <DeleteAccount></DeleteAccount>
              </div>
            </div>


          </div>
          <div id='rightSide'>
            <div id='infoProfile'>
              <h3>Info:</h3>
              {/*TODO date is taking one hour to the real one*/}
              <p>{userObj.birthdate}</p>
              <p>{userObj.city}</p>
              <p>Available: {userObj.available?'Yes':'No'}</p>
              <SportsModal></SportsModal>

            </div>
            <div id='btnProfile'>
              <div className='tooltip lookingTool'>
                  <Link to='/lookingForPlayers'><ImBinoculars></ImBinoculars></Link>
                  <span className="tooltiptext">Looking</span>
              </div>
              <div className='tooltip eventsTool'>
                <Link to='/userEvents'><MdEmojiEvents></MdEmojiEvents></Link>                    
                <span className="tooltiptext">Events</span>
              </div>
              <div className='tooltip friendsTool'>
                <Link to='/friends'><FaUserFriends></FaUserFriends></Link>
                <span className="tooltiptext friends">Friends</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  export default StaticProfile