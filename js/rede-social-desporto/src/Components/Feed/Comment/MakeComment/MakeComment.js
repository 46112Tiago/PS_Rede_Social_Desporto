import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './MakeComment.css'
import { comment } from '../../../../Model/Model';
import {IoSend} from 'react-icons/io5'

const MakeComment = (props) => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [commentObj, setComment] = useState(comment);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setComment({ comment: ''}), 1000);
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

    fetch('http://localhost:8080/user/1/post/1/comment', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div id='createComment'>
            <form id='formComment' onSubmit={handleSubmit(submit)}>
                <textarea maxlength="100" id='textareaComment' {...register('comment')} placeholder='Make your comment...'/>
                <div id='formSbm'>
                    <button type={'submit'} id='sendComment' ><IoSend></IoSend></button>
                </div>
            </form>
            <hr></hr>
        </div>
      );
    }
  

  export default MakeComment