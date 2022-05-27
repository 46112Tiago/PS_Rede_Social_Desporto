import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CreatePost.css'
import { post } from '../../../Model/Model';
import {IoSend} from 'react-icons/io5'

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



  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {
    
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/user/1/post', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div id='createPost'>
            <form id='form' onSubmit={handleSubmit(submit)}>
                <textarea maxlength="100" id='textarea' {...register('description')} placeholder='What are you thinking righ now?'/>
                <div id='formSbm'>
                    <label for="file-upload" className="custom-file-upload">
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