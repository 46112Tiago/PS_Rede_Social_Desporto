import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { message } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import SockJsClient from 'react-stomp';
import './ConversationIdle.css'

const SOCKET_URL = 'http://localhost:8080/sendMessage';

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

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setMessage(message), 1000);
  }, []);



      let onConnected = () => {
        console.log("Connected!!")
      }

      let onMessageReceived = (msg) => {
        setMessage(msg.message);
      }


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
      props.messageResp(res.id)
    }else{
      const resp = await fetch(`http://localhost:8080/user/${window.name}/friend/${props.friendId}/message`,options);
      const res = await resp.json()
      props.messageResp(res.id)
    }
}

      return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <input maxLength={400} name='message' type={'text'} id='inputTxt' placeholder='Write your message' {...register('message')} required></input>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/sendMessage']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={msg => onMessageReceived(messageObj)}
                debug={false}
            />
          </form>
        </div>
      );
    }
  
  export default InputText