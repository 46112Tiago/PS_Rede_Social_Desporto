import React from 'react';
import './Sign_Up.css'
import { use } from 'express/lib/router';
import LoginButton from '../SignInButton';


 // this.name = {value: ''};
 // this.lastname = {value: ''};
 // this.email = {value: ''};
  //this.password = {value: ''};
//  this.rePassword = {value: ''};

function SignUp() {
      return (
        <div className='formContainer'>
              <div className='item' id='imageItem'>
                <div id='text'>
                  <h1 id='textH1'>Bem vindo ao FieldMe!</h1> 
                  <h2>Está preparado para se tornar um atleta ?</h2>
                </div>
              </div>
              <div  className='item' id='formItem'>
                  <form /*onSubmit*/ method="POST" >
                    <label className='labels'>Primeiro nome:</label>
                    <br/>
                    <input className='inputText' type="text" placeholder='Nome' required/>
                    <hr/>

                    <label>Apelido:</label>
                    <br/>
                    <input className='inputText' type="text" placeholder='Apelido' required/>
                    <hr/>

                    <label>Email:</label>
                    <br/>
                    <input className='inputText' type="email" placeholder='Email' required/>
                    <hr/>

                    <label>Password:</label>
                    <br/>
                    <input className='inputText' type="password" placeholder='Password' required/>
                    <hr/>

                    <label>Repita a password:</label>
                    <br/>
                    <input className='inputText' type="password" placeholder='Repita a Password' required/>
                    <hr/>

                    <br/>  
                    <input id='subBtn' type="submit" value="Inscrever" />
                    <a id='logInBtn' href='../logIn'> Já possui conta </a>
                   
                    
                  </form>
                  <br></br>
                  <LoginButton></LoginButton>
              </div>
        </div>
      );
    }
  

  export default SignUp