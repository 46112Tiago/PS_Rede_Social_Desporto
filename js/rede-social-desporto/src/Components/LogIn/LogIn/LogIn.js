import React from 'react';
import './LogIn.css'

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.email = {value: ''};
      this.password = {value: ''};
    }
  
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
                  <form /*onSubmit*/ method="POST" >

                    <label className='textArea'>Email:</label>
                    <br/>
                    <input  className='inputText' type="email" placeholder='Email' required/>
                    <hr/>

                    <label className='textArea'>Password:</label>
                    <br/>
                    <input className='inputText' type="password" placeholder='Password' required/>
                    <hr/>

                    <br/>  
                    <input id='subBtn' className='btn' type="submit" value="Confirmar" />
                    <a id='logInBtn' className='btn' href='../signUp'> Ainda não possui conta </a>
                  </form>
              </div>
        </div>
      );
    }
  }

  export default LogIn