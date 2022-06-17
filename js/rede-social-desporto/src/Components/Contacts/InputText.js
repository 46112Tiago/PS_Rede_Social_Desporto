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
  const {getAccessTokenSilently} = useAuth0();
  // user state for form
  const [messageObj, setMessage] = useState(message);
  const [privateChats, setPrivateChats] = useState(new Map());     
  const [userData, setUserData] = useState({
        username: 'T',
        receiver: {userId:0},
        connected: false,
        message: ''
      });

    useEffect(() => {
      console.log(userData);
    }, [userData]);

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/webSocket');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/friend/'+window.name+'/private', onPrivateMessage);
        userJoin();
    }

    const userJoin=()=>{
          var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
          };
          stompClient.send("/message", {}, JSON.stringify(chatMessage));
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
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const sendPrivateValue=(text)=>{
        if (stompClient) {
          var chatMessage = {
            receiver:{userId:props.friendId},
            message: text.message,
          };
          
            setPrivateChats(new Map(privateChats));
          stompClient.send("/message/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": text.message});
          props.socket(text.message)
        }
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const registerUser=()=>{
        connect();
    }

  // effect runs on component mount
  useEffect(() => {
    connect()
      // simulate async api call with set timeout
      setTimeout(() => setMessage(message), 1000);
  }, []);


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
    if(props.sendTo == "group"){
      const resp = await fetch(`http://localhost:8080/user/${window.name}/group/${props.groupId}/message`,options);
      const res = await resp.json()
      props.messageResp(res)
    }else{
      const resp = await fetch(`http://localhost:8080/user/${window.name}/friend/${props.friendId}/message`,options);
      const res = await resp.json()
      props.messageResp(res)
    }
    sendPrivateValue(data)
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