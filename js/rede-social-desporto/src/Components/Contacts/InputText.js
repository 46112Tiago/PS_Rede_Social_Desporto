import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import './ConversationIdle.css'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

let stompClient =null;

const InputText = (props) => {

  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently,user} = useAuth0();
  const [messageObj, setMessage] = useState(message);
  
  //Based on https://github.com/JayaramachandranAugustin/ChatApplication    2022-06-18
  
    const onConnected = () => {
        stompClient.subscribe(`/friend/${user.email.split("@")[0]}/private`, onPrivateMessage);
    }
    
    const onPrivateMessage = (payload)=>{
        const messages = message
        messages.message = JSON.parse(payload.body).message
        props.socket(messages)
        setMessage(messages)
    }

    const onError = (err) => {
        console.log(err);
    }

    const sendPrivateValue=(text)=>{
        if (stompClient) { 
          stompClient.send("/message/private-message", {}, JSON.stringify({
            receiver:{email:props.friendName},
            message: text.message,
          }));
        }else {
          onError("Error sending message")
        }
    }

  useEffect(() => {
    let Sock = new SockJS('http://localhost:8080/webSocket');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
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