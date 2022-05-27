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
                  <h1 id='textH1'>Bem vindo ao FieldMe!</h1> 
                  <h2>Está preparado para se tornar um atleta ?</h2>
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