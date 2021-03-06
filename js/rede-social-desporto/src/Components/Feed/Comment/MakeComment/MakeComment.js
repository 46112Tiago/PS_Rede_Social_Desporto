import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './MakeComment.css'
import { api_url, comment } from '../../../../Model/Model';
import {IoSend} from 'react-icons/io5'
import { useAuth0 } from "@auth0/auth0-react";

const MakeComment = (props) => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently,user} = useAuth0();

  // user state for form
  const [commentObj, setComment] = useState(comment);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setComment({ comment: ''}), 1000);
  }, []);



  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  async function submit(data) {
    const token = await getAccessTokenSilently();
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };
    const email = user.email.split("@")[0]
    const response = await fetch(`${api_url}/user/post/${props.postId}/comment?email=${email}`, options)
    const resp = await response.json()
    props.newComment(resp)
}

      return (
        <div id='createComment'>
            <form id='formComment' onSubmit={handleSubmit(submit)}>
                <textarea maxLength="100" id='textareaComment' {...register('comment')} placeholder='Make your comment...'/>
                <div id='formSbm'>
                    <button type={'submit'} id='sendComment' ><IoSend></IoSend></button>
                </div>
            </form>
            <hr></hr>
        </div>
      );
    }
  

  export default MakeComment