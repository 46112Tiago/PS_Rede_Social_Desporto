import './ConversationIdle.css'
import FriendMsg from './Messages/FriendMsg';
import OwnMsg from './Messages/OwnMsg';
import InputText from './InputText';
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import DropDownGroup from './Groups/DropDownGroup';
import React, { useState } from 'react';

const ConversationIdle = (props) => {
  

  const dropdown = props.dropdown ? <DropDownGroup owner={props.owner} groupId={props.groupId}/> : <></>
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();  
  const [messageArray, setMessage] = React.useState([message]);
  const [messageReceived, setReceivedMessage] = useState('');
  const {getAccessTokenSilently} = useAuth0();

    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          console.log(props.groupId)
          console.log(props.owner)
          const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
          };
          let req
          if(props.messageType == "group")
            req = await fetch(`http://localhost:8080/user/${window.name}/group/${props.groupId}/message`,options);
          else
            req = await fetch(`http://localhost:8080/user/${window.name}/message/${props.friendId}`,options);
            const resp = await req.json();
          setMessage(resp);
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[props.groupId,props.friendId]);


      return (
        <div>
            {dropdown}
            <h3 id='nameConvo'>Friend/Group name</h3>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText groupId={props.groupId} friendId={props.friendId} sendTo={props.messageType}></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}
                {/* Instead of OwnMsg and FriendMsg pass this to a component Message and then there choose which on is suppose to be created */},

              {messageArray.map((messageObj,i) => 
                  <OwnMsg message={messageObj.message}></OwnMsg>
              )}

                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                
              </div>

            </div>

        </div>
      );
    }
  

  export default ConversationIdle