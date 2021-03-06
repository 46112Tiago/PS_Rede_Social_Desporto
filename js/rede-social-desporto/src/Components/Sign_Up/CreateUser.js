import React from 'react';
import { useForm } from "react-hook-form";
import './CreateUser.css'
import {FaCity,FaBirthdayCake} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { api_url } from '../../Model/Model';


const CreateUser = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {user,getAccessTokenSilently} = useAuth0()
  const [imageHex, setImage] = React.useState('')

  const myHeaders = new Headers()

  React.useEffect(() => {

    //Based on:  https://stackoverflow.com/questions/23144647/file-api-hex-conversion-javascript           18/06/2022

    document.getElementById('file-upload').addEventListener('change', function(event) {

        var reader = new FileReader();
        reader.onload = function() {
            let byteArray = new Uint8Array(reader.result)
            let hexString = ''
            for (let i = byteArray.length-1; i >=0 ;i--){
                let hexValue = byteArray[i].toString(16); 
                hexValue = hexValue.length == 1 ? "0" + hexValue : hexValue 
                hexString = hexValue.concat(hexString)
            } 
            setImage(hexString)
      
        }
        reader.readAsArrayBuffer(event.target.files[0]);
        
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
    const response = await fetch(`${api_url}/user`, options)
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