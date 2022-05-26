import React from 'react';
import './Home.css'
import { FaArrowDown, FaBasketballBall, FaFutbol, FaMapMarked } from 'react-icons/fa';

class Home extends React.Component {
  
    render() {
      return (
        <div>
            <div className="parallax" id='map'>
                <div className='right_float'>
                  <h1>Mapa</h1>
                  <p>Procura por complexos desportivos que proporciam o desporto de que mais gostas.</p>
                  <p>Aluguer de campos à distancia de um click.</p>
                  <p>Informa te sobre os campos, horários e preços disponiveis.</p>
                  <p>Encontra campos nas tuas redondezas, ou em qualquer lugar que estejas.</p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/map'><FaMapMarked className='icons' id='mapIcon'></FaMapMarked></a>
                </div>
            </div>

            <div className="parallax" id='events'>
              <div className='left_float'>
                  <h1>Eventos</h1>
                  <p>Participa em torneios orquestrados por complexos deportivos.</p>
                  <p>Cria ou participa em eventos organizados pelos utilizadores.</p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/events'><FaFutbol className='icons' id='football'></FaFutbol></a>
                </div>
            </div>

            <div className='parallax' id='register'>
              <div className='right_float'>
                  <h1>Socializa</h1>
                  <p>Entra em contacto e compartilha as tuas atividades e marcos com os teus amigos.</p>
                  <p>Procura por elementos que possam preencher a vaga que falta no teu grupo.</p>
                  <p>Informa te sobre os campos, horários e preços disponiveis.</p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/signup'><FaBasketballBall className='icons' id='basketball'></FaBasketballBall></a>
                </div>
            </div>

        </div>
      );
    }
  }

  export default Home