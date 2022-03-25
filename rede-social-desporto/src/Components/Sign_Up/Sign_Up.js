import React from 'react';
import './Sign_Up.css'

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.name = {value: ''};
      this.lastname = {value: ''};
      this.email = {value: ''};
      this.password = {value: ''};
      this.rePassword = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setName({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('O formulário foi submetido com sucesso');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} method="POST" >
            <div className='halfForm'>
                <img src='/assets/images/sports_image.png' alt='sports image'/>
            </div>
            <div  className='halfForm'>
                <label>Primeiro nome:</label>
                <br/>
                <input className='inputText' type="text" value={this.name.value} onChange={this.handleChange} placeholder='Nome' required/>
                <hr/>

                <label>Apelido:</label>
                <br/>
                <input className='inputText' type="text" value={this.lastname.value} onChange={this.handleChange} placeholder='Apelido' required/>
                <hr/>

                <label>Email:</label>
                <br/>
                <input className='inputText' type="email" value={this.email.value} onChange={this.handleChange} placeholder='Email' required/>
                <hr/>

                <label>Password:</label>
                <br/>
                <input className='inputText' type="password" value={this.password.value} onChange={this.handleChange} placeholder='Password' required/>
                <hr/>

                <label>Repita a password:</label>
                <br/>
                <input className='inputText' type="password" value={this.rePassword.value} onChange={this.handleChange} placeholder='Repita a Password' required/>
                <hr/>

                <br/>  
                <input id='subBtn' type="submit" value="Inscrever" />
                <button id='logInBtn'> Já possui conta </button>
            </div>
        </form>
      );
    }
  }

  export default SignUp