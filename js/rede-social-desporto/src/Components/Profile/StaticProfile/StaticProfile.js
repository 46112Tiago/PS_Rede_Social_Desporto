import React from 'react';
import './StaticProfile.css'
import { FaBirthdayCake } from 'react-icons/fa';
import User from '../../../Model/Model.js';

const StaticProfile = () => {

  const myHeaders = new Headers();


  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  
  const [user, setUser] = React.useState(User);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/3");
        const resp = await req.json();
        setUser(resp);
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
        
      }
    };

    if (!isLoading) makeRequest();
  },[]);
  //if (isLoading) return <LoadingComponent />;
  //if (error) return <ErrorComponent text={error.message} />;

  return (
    <div id='containerProfile'>
        <div id='leftSide'>
          <div className='rowLeft' id='profilePicDiv'>
            <img id='profilePic' src={require('../Img/default_profile.jpg')}></img>
          </div>
            <h4 className='rowLeft'>{user.firstname} {user.lastname}</h4>
            <h4 className='rowLeft'>{user.email}</h4>
            <h4 className='rowLeft'>{user.birthday}</h4>

        </div>
        <div id='rightSide'>
          
          <h2 className='title'>Info</h2>
          <h4 className='rowRight'>{user.city}</h4>
          <h4 className='rowRight'>{user.available}</h4>
          <h4 className='rowRight'>{user.gender}</h4> 
          <h4 className='rowRight'>sports</h4>

          <hr></hr>
          
          <h2 className='title'>Editar</h2>
          <p className='rowRight'>Edite os seus dados e interesses.</p>
          <div className='anchorDiv'>
            <a href='/edit' className='anchorBtn'>Edite Agora</a>
          </div>

          <hr></hr>

          <h2 className='title'>Looking for Players</h2>
          <p className='rowRight'>Procura por jogadores na sua área.</p>
          <p className='rowRight'>Indique um raio de distância e procure por pessoas que estejam interessadas em ocupar a posição que falta.</p>
          <div className='anchorDiv'>
            <a href='/lookingForPlay' className='anchorBtn'>Comece a procurar</a>
          </div>

          <hr></hr>

          <h2 className='title'>Eventos do Utilizador</h2>
          <p className='rowRight'>Verifique todos os eventos nos quais está incrito no momento.</p>
          <p className='rowRight'>Crie os seus eventos e compartilhe na página de ventos para que outros utilizadores se possam inscrever.</p>
          <div className='anchorDiv'>
            <a href='/userEvents' className='anchorBtn'>Veja os seus eventos</a>
          </div>

          <hr></hr>

          <h2 className='title'>Amigos</h2>
          <p className='rowRight'>Veja o prefil dos seus amigos.</p>
          <div className='anchorDiv'>
            <a href='/friends' className='anchorBtn'>Lista de Amigos </a>
          </div>

        </div>
    </div>
  );
}


  export default StaticProfile