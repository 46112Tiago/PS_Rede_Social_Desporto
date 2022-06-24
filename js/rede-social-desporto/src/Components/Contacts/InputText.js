import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import './ConversationIdle.css'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

let stompClient =null;

const InputText = (props) => {


    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */
  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently,user} = useAuth0();
  // user state for form
  const [messageObj, setMessage] = useState(message);
  
  //Based on https://github.com/JayaramachandranAugustin/ChatApplication    2022-06-18
  
  const [privateChats, setPrivateChats] = useState(new Map());     
  const [userData, setUserData] = useState({
        receiver: {email:''},
        connected: false,
        message: ''
      });


    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/webSocket');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe(`/friend/${user.email.split("@")[0]}/private`, onPrivateMessage);
    }
    
    const onPrivateMessage = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
        const messages = message
        messages.message = payloadData.message
        props.socket(messages)
        setMessage(messages)
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const sendPrivateValue=(text)=>{
        if (stompClient) {
          var chatMessage = {
            receiver:{email:props.friendName},
            message: text.message,
          };
          
            setPrivateChats(new Map(privateChats));
          stompClient.send("/message/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": text.message});
        }
    }

  // effect runs on component mount
  useEffect(() => {
    connect()
      // simulate async api call with set timeout
      setTimeout(() => setMessage(message), 1000);
  }, [messageObj]);


  async function submit(data) {
    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${token}`)
    myHeaders.append('Content-Type','application/json')
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    }
    const email = user.email.split("@")[0]
    if(props.sendTo == "group"){
      const resp = await fetch(`http://localhost:8080/user/group/${props.groupId}/message?email=${email}`,options);
      const res = await resp.json()
      sendPrivateValue(data)
      props.messageResp(res)
    }else{
      const resp = await fetch(`http://localhost:8080/user/friend/${props.friendName}/message?email=${email}`,options);
      const res = await resp.json()
      sendPrivateValue(data)
      props.messageResp(res)
    }
}

      return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <input maxLength={400} name='message' type={'text'} id='inputTxt' placeholder='Write your message' {...register('message')} required></input>
          </form>
        </div>
      );
    }
  
  export default InputText