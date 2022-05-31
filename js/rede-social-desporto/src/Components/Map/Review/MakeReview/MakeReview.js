import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './MakeReview.css'
import { review } from '../../../../Model/Model';
import {IoSend} from 'react-icons/io5'
import { useAuth0 } from "@auth0/auth0-react";

const MakeReview = (props) => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [reviewObj, setReview] = useState(review);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setReview({ review: ''}), 1000);
  }, []);

  const {getAccessTokenSilently} = useAuth0();

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
    };
    

    fetch(`http://localhost:8080/compound/${window.localStorage.getItem("compound_id")}/user/${window.name}/review`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div id='createReview'>
            <form id='formReview' onSubmit={handleSubmit(submit)}>
                <textarea maxlength="100" id='textareaReview' {...register('description')} placeholder='Write your review...'/>
                <input type={'number'} step=".1" {...register('rating')}></input>
                <div id='formSbm'>
                    <button type={'submit'} id='sendReview' ><IoSend></IoSend></button>
                </div>
            </form>
            <hr></hr>
        </div>
      );
    }
  

  export default MakeReview