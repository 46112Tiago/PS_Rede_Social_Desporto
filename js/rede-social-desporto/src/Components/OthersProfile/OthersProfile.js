import React from "react";
import './OthersProfile.css'
import {FaCity} from 'react-icons/fa'
import SportsModal from "../SportsModal/SportsModal";
import AddFriend from "./AddFriend/AddFriend";
import { user } from "../../Model/Model";
import { useAuth0 } from "@auth0/auth0-react";

const OthersProfile = (props) => {

const {getAccessTokenSilently} = useAuth0();
const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
const [userObj, setUser] = React.useState(user);
  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
        };
          const friendId = window.location.href.split('/')[4][0]
          const req =  await fetch(`http://localhost:8080/user/${window.name}/friend/${friendId}`,options);
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
    },[userObj]);

      return (
        <div id="body">
            <div id="backgroundProfile">
                <div id="backgroundLeft">
                    <img id="profileImg" src={require('./Img/user_icon.png')}></img>
                </div>

                <div id="backgroundRight">
                    <div className="rightProfile" id="rightName">
                        <h2>{userObj.firstName} {userObj.lastName}</h2>
                    </div>
                    <div className="rightProfile" id="rightInfo">
                        <h4><FaCity></FaCity> {userObj.city}</h4>
                        <SportsModal otherProfile={true} userId={userObj.userId}></SportsModal>
                    </div>
                    {userObj.friends == null ? <AddFriend friendId={userObj.userId}></AddFriend> : <></> }
                </div>

            </div>
        </div>
      );
    }
  

  export default OthersProfile