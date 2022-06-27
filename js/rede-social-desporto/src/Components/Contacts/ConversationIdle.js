import './ConversationIdle.css'
import FriendMsg from './Messages/FriendMsg';
import OwnMsg from './Messages/OwnMsg';
import InputText from './InputText';
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import DropDownGroup from './Groups/DropDownGroup';
import React, { useState } from 'react';
import { createMessage } from '../../Functions/Functions';

const ConversationIdle = (props) => {
  

  const messageResp = (messageR) => {
    const div = createMessage('ownMsg',messageR.message)
    const firstMessage = document.getElementsByClassName(`messages${0}`)[0]
    document.getElementById('overflowText').insertBefore(div,firstMessage)
    setReceivedMessage(messageReceived+1)
  }

  const socket = (messageData) => {
    const div = createMessage('friendMsg',messageData.message)
    const firstMessage = document.getElementsByClassName(`messages${0}`)[0]
    document.getElementById('overflowText').insertBefore(div,firstMessage)
    setReceivedMessage(messageReceived+1)
  }

  const dropdown = props.dropdown ? <DropDownGroup owner={props.owner} groupId={props.groupId} delete={props.delete} exit={props.exit}/> : <></>
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();  
  const [messageArray, setMessage] = React.useState([message]);
  const [groupId, setGroupId] = React.useState(0);
  const [friendId, setFriendId] = React.useState(0);
  const [messageReceived, setReceivedMessage] = useState(0);
  const [messageReceivedConfirm, setReceivedMessageConfirm] = useState(0);
  const [page, setPage] = React.useState(0);
  const [scroll, setScroll] = React.useState(0)
  const {getAccessTokenSilently,user} = useAuth0();

    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {

      document.getElementById('overflowText').onscroll =
        
      function()
      {
        var scrollTop = document.getElementById('overflowText').scrollTop * -1;
        console.log(scrollTop)
        console.log(scroll)
        if(scroll < scrollTop ){
          setScroll(scrollTop)
        }       
      } 
      
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          if(messageReceived > messageReceivedConfirm){
            setReceivedMessageConfirm(messageReceived)
            return
          }
          const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
          };
          let req
          const email = user.email.split("@")[0]
          if(props.groupId != undefined && props.groupId != groupId){
            setPage(0)
            setScroll(0)
            setGroupId(props.groupId)
            req = await fetch(`http://localhost:8080/user/group/${props.groupId}/message?email=${email}`,options);
            const resp = await req.json();
            setMessage(resp)
            return

          } else if(props.friendName != undefined && props.friendName != friendId) {
            setScroll(0)
            setFriendId(props.friendName)
            req = await fetch(`http://localhost:8080/user/message/${props.friendName}?page=${0}&email=${email}`,options);
            const resp = await req.json();
            setPage(1)
            setMessage(resp)
            return
          } 
          if(props.messageType == "group")
            req = await fetch(`http://localhost:8080/user/group/${props.groupId}/message?email=${email}`,options);
          else
            req = await fetch(`http://localhost:8080/user/message/${props.friendName}?page=${page}&email=${email}`,options);
          
          const resp = await req.json();
          setMessage(messageArray.concat(resp))  
          setPage(page+1)

        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[props.groupId,props.friendName,messageReceived,scroll]);


      return (
        <div>
            {dropdown}
            <h3 id='nameConvo'>{props.name}</h3>
            <p id='test'></p>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText groupId={props.groupId} friendName={props.friendName} sendTo={props.messageType} messageResp={messageResp} socket={socket} ></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}
                {/* Instead of OwnMsg and FriendMsg pass this to a component Message and then there choose which on is suppose to be created */},

              {messageArray.map((messageObj,i) => {
                if(messageObj.id != 0){
                  if(messageObj.sender && messageObj.sender.email == user.email){
                    return(
                    <div key={i} id={`message${i}`} className={`messages${i}`}>
                      <OwnMsg message={messageObj.message}></OwnMsg>
                   </div> 
                    )
                  }else{
                    return(
                    <div key={i} id={`message${i}`} className={`messages${i}`}>
                      <FriendMsg message={messageObj.message}></FriendMsg>
                    </div>)
                  }
                }
              })}
              </div>

            </div>

        </div>
      );
    }
  

  export default ConversationIdle