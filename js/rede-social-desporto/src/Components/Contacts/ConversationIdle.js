import './ConversationIdle.css'
import FriendMsg from './Messages/FriendMsg';
import OwnMsg from './Messages/OwnMsg';
import InputText from './InputText';
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import DropDownGroup from './Groups/DropDownGroup';
import React, { useState } from 'react';

const ConversationIdle = (props) => {
  

  const messageResp = (messageR) => {
    messageArray.unshift(messageR)
    setReceivedMessage(messageReceived+1)
  }

  const dropdown = props.dropdown ? <DropDownGroup owner={props.owner} groupId={props.groupId}/> : <></>
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();  
  const [messageArray, setMessage] = React.useState([message]);
  const [groupId, setGroupId] = React.useState(0);
  const [friendId, setFriendId] = React.useState(0);
  const [messageReceived, setReceivedMessage] = useState(0);
  const [messageReceivedConfirm, setReceivedMessageConfirm] = useState(0);
  const [page, setPage] = React.useState(0);
  const [scroll, setScroll] = React.useState(0)
  const {getAccessTokenSilently} = useAuth0();

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
        console.log(scroll*page)
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
          
          if(props.groupId != undefined && props.groupId != groupId){
            setPage(0)
            setScroll(0)
            setGroupId(props.groupId)
            req = await fetch(`http://localhost:8080/user/${window.name}/group/${props.groupId}/message`,options);
            const resp = await req.json();
            setMessage(resp)
            return

          } else if(props.friendId != undefined && props.friendId != friendId) {
            setPage(0)
            setScroll(0)
            setFriendId(props.friendId)
            req = await fetch(`http://localhost:8080/user/${window.name}/message/${props.friendId}?page=${0}`,options);
            const resp = await req.json();
            setMessage(resp)
            return
          } 

          if(props.messageType == "group")
            req = await fetch(`http://localhost:8080/user/${window.name}/group/${props.groupId}/message`,options);
          else
            req = await fetch(`http://localhost:8080/user/${window.name}/message/${props.friendId}?page=${page}`,options);
          
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
    },[props.groupId,props.friendId,messageReceived,scroll]);


      return (
        <div>
            {dropdown}
            <h3 id='nameConvo'>Friend/Group name</h3>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText groupId={props.groupId} friendId={props.friendId} sendTo={props.messageType} messageResp={messageResp}></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}
                {/* Instead of OwnMsg and FriendMsg pass this to a component Message and then there choose which on is suppose to be created */},

              {messageArray.map((messageObj,i) => {
                if(messageObj.id != 0){
                  if(messageObj.sender.userId == window.name){
                    return(<OwnMsg message={messageObj.message}></OwnMsg>)
                  }else{
                    return(<FriendMsg message={messageObj.message}></FriendMsg>)
                  }
                }
              }
                  
              )}
              
              </div>

            </div>

        </div>
      );
    }
  

  export default ConversationIdle