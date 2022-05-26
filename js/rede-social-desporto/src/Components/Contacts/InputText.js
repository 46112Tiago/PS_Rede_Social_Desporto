import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { message } from '../../Model/Model';
import './ConversationIdle.css'

const InputText = (props) => {
  
    /**
     * Change Friends/Groups to only one of those. 
     * If the user press Friends, appears only the friends list
     * If the user press Groups, appears only the groups list
     */
  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [messageObj, setMessage] = useState(message);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setMessage(message), 1000);
  }, []);

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch(`${props.url}`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <input name='message' type={'text'} id='inputTxt' placeholder='Write your message' {...register('message')} required></input>
          </form>
        </div>
      );
    }
  
  export default InputText