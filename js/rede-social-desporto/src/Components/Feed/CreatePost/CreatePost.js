import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CreatePost.css'
import { api_url, post } from '../../../Model/Model';
import {IoSend} from 'react-icons/io5'
import { useAuth0 } from "@auth0/auth0-react";

const CreatePost = (props) => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [postObj, setPost] = useState(post);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setPost({ description: ''}), 1000);
  }, []);

  const {getAccessTokenSilently,user} = useAuth0();

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
    const response = await fetch(`${api_url}/user/post?email=${email}`, options)
    const postId = await response.json()
    props.postId(postId)

}

      return (
        <div id='createPost'>
            <form id='form' onSubmit={handleSubmit(submit)}>
                <textarea maxLength="100" id='textarea' {...register('description')} placeholder='What are you thinking righ now?'/>
                <div id='formSbm'>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <img id='postImg' src={require('./images/1200px-Antu_insert-image.svg.png')}></img>
                    </label>
                    <input id="file-upload" type="file" accept="image/*" {...register('pictures')} multiple/>                    
                    <button type={'submit'} id='sendPost' ><IoSend></IoSend></button>
                </div>
            </form>
        </div>
      );
    }
  

  export default CreatePost