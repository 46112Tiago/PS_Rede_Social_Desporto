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
      
  var elem = document.getElementById('ratingReview');

  var rangeValue = function(){
    var newValue = elem.value;
    var target = document.querySelector('.value');
    target.innerHTML = "Rating: " + newValue;
  }
  
  elem.addEventListener("input", rangeValue);
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
    

    const response = await fetch(`http://localhost:8080/compound/${window.localStorage.getItem("compound_id")}/user/${window.name}/review`, options)
    const resp = await response.json()
    props.newReview(resp)
}

      return (
        <div id='createReview'>
            <form id='formReview' onSubmit={handleSubmit(submit)}>
                <div id='inputReview'>
                    <textarea maxLength="100" id='textareaReview' {...register('description')} placeholder='Write your review...' required/>
                    <input type={'range'} step=".1" {...register('rating')} placeholder='0' id='ratingReview' min={0} max={5} ></input>
                    <h5 id='showRating' className='value'>Rating: 5</h5>
                </div>
                <div id='formSbm'>
                    <button type={'submit'} id='sendReview' ><IoSend></IoSend></button>
                </div>
            </form>
            <hr></hr>
        </div>
      );
    }
  

  export default MakeReview