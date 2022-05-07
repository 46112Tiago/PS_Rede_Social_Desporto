import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { user } from "../../Model/Model"
import './CreateUser.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaCity,FaBirthdayCake} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const CreateUser = () => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [userObj, setUser] = useState(user);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setUser(user), 1000);
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
    console.log(options.body)

    fetch('http://localhost:8080/user', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

  return (
      <div id='creteBody'>
          <div id='userCreateForm'>
              {userObj &&
                  <form onSubmit={handleSubmit(submit)}>
                                <h3 id='titleAccount'>Create Account</h3>
                          <div className="eventInput">
                              <CgProfile></CgProfile>
                              <input name="firstname" type="text" {...register('firstname')}  placeholder='First Name' required></input>
                          </div>
                          <div className="eventInput">
                              <CgProfile></CgProfile>
                              <input name="firstname" type="text" {...register('firstname')}  placeholder='First Name' required></input>
                          </div>
                          <div className="eventInput">
                              <FaBirthdayCake></FaBirthdayCake>
                              <input name="birthday" type="text" {...register('birthday')}  placeholder='Birthday' required></input>
                          </div>
                          <div className="eventInput">
                              <FaCity></FaCity>
                              <input name="city" type="text" {...register('city')}  placeholder='City' required></input>
                          </div>
                          <div className="eventInput">
                              <HiOutlineMail></HiOutlineMail>
                              <input name="email" type='email' {...register('email')}  placeholder='example@email.com' required></input>
                          </div>
                          <div className="eventInput">
                            <label for='profilepic' className='labelEvent'>Choose a profile picture:</label>
                            <input type="file"  {...register('profilepic')} name="profilepic" placeholder='profile picture' accept="image/png, image/jpeg"/>
                          </div>
                          <div className="eventInput">
                            <input type="radio"  name="gender" value="M" {...register('gender')}/>
                            <label className='labelEvent'>Male</label><br/>
                            <input type="radio"  name="gender" value="F" {...register('gender')}/>
                            <label className='labelEvent'>Female</label><br/>
                            <input type="radio" name="gender" value="O" {...register('gender')}/>
                            <label className='labelEvent'>Other</label>
                          </div>
                            
                         
                      <div className="form-row" id='submitEvent'>
                          <button type="submit" id='createBtn'>Submit</button>
                      </div>
                  </form>
              }
          </div>
        </div>
  );
}


  export default CreateUser