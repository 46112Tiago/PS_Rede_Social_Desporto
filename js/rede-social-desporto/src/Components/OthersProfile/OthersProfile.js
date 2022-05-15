import React from "react";
import './OthersProfile.css'
import {FaCity} from 'react-icons/fa'
import SportsModal from "../SportsModal/SportsModal";
import AddFriend from "./AddFriend/AddFriend";
import { user } from "../../Model/Model";

const OthersProfile = (props) => {

const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
const [userObj, setUser] = React.useState(user);
  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch(`http://localhost:8080/user/${props.userId}`);
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
                        <SportsModal></SportsModal>
                    </div>
                    <AddFriend></AddFriend>
                </div>

            </div>
        </div>
      );
    }
  

  export default OthersProfile