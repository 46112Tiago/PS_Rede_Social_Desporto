import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CreateUser.css'
import {FaCity,FaBirthdayCake} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const CreateUser = () => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {user,getAccessTokenSilently} = useAuth0()
  const [imageHex, setImage] = React.useState('')

  const myHeaders = new Headers()

  React.useEffect(() => {
    document.getElementById('file-upload').addEventListener('change', function() {

        var reader = new FileReader();
        reader.onload = function() {
            let aux
            let u = new Uint8Array(this.result),
            a = '',
            i = u.length;
            while (i--){
                // map to hex
                aux = (u[i] < 16 ? '0' : '') + u[i].toString(16);
                a = aux.concat(a)
            } 
            u = null; // free memory
            console.log(a); // work with this
            setImage(a)
      
        }
        reader.readAsArrayBuffer(this.files[0]);
        
      }, false);
    
  })
  
  async function submit(data) {
    data.email = user.email
    data.profilepic = imageHex
    const token = await getAccessTokenSilently()
    myHeaders.append('Content-Type','application/json')
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };
    const response = await fetch('http://localhost:8080/user', options)
    const responseJson = await response.json()
    window.name = responseJson
    if(response.status == 200){
        navigate("/profile");
    }
}

  return (
      <div id='creteBody'>
          <div id='userCreateForm'>
            <form onSubmit={handleSubmit(submit)} id='formBody'>
                        <h3 id='titleAccount'>Create Account</h3>
                    <div className="eventInput">
                        <CgProfile></CgProfile>
                        <input name="firstname" type="text" {...register('firstName')}  placeholder='First Name' required></input>
                    </div>
                    <div className="eventInput">
                        <CgProfile></CgProfile>
                        <input name="lastname" type="text" {...register('lastName')}  placeholder='Last Name' required></input>
                    </div>
                    <div className="eventInput">
                        <FaCity></FaCity>
                        <input name="city" type="text" {...register('city')}  placeholder='City' required></input>
                    </div>
                    <div className="eventInput">
                        <FaBirthdayCake></FaBirthdayCake>
                        <input name="birthday" type="date" {...register('birthdate')}  placeholder='Birthday' required></input>
                    </div>
                    <div className="eventInput">                            
                    <label for="file-upload" className="custom-file-upload">Profile picture <AiOutlinePlusCircle/></label>
                    <input id="file-upload" name='profilepic' type="file" accept="image/*" {...register('profilepic')} placeholder='profile picture'/> 
                    </div>
                    <div className="eventInput">
                    <input type="radio"  name="gender" value="M" {...register('gender')} checked/>
                    <label className='labelEvent'>Male</label><br/>
                    <input type="radio"  name="gender" value="F" {...register('gender')}/>
                    <label className='labelEvent'>Female</label><br/>
                    <input type="radio" name="gender" value="O" {...register('gender')}/>
                    <label className='labelEvent'>Other</label>
                    </div>
                    <div className='eventInput'>
                    
                    </div>
                <div id='submitProfile'>
                    <button type="submit" id='createBtn'>Submit</button>
                </div>
            </form>
          </div>
        </div>
  );
}


  export default CreateUser