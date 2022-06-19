import React from 'react';
import './LogIn.css'
import '../Sign_Up/Sign_Up.css'
import LoginButton from '../SignInButton';

class LogIn extends React.Component {
  
    render() {
      return (
        <div className='formContainer'>
              <div className='item' id='imageItem'>
                <div id='text'>
                  <h1 id='textH1'>Welcome to FieldMe!</h1> 
                  <h2>Are you ready to become an athlete ?</h2>
                </div>
              </div>
              <div  className='item' id='formLogin'>
                  <LoginButton></LoginButton>
              </div>
        </div>
      );
    }
  }

  export default LogIn