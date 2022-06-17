import React from 'react';
import './Home.css'
import { FaArrowDown, FaBasketballBall, FaFutbol, FaMapMarked } from 'react-icons/fa';
import ChooseAuthPath from '../Auth0/ChooseAuthPath';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  
  const {isAuthenticated} = useAuth0()
  
  const component = isAuthenticated ? <ChooseAuthPath/> : <></>

      return (
        <div>
            <div className="parallax" id='map'>
                <div className='right_float'>
                  <h1>Map</h1>
                  <p><b>Search for compounds that offer the sport you like the most.</b></p>
                  <p><b>Get information about the fields, reviews and schedules.</b></p>
                  <p><b>Find fields nearby, or wherever you are.</b></p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/map'><FaMapMarked className='icons' id='mapIcon'></FaMapMarked></a>
                </div>
            </div>

            <div className="parallax" id='events'>
              <div className='left_float'>
                  <h1>Events</h1>
                  <p><b>Participate in tournaments orchestrated by sports complexes.</b></p>
                  <p><b>Create or participate in user-organized events.</b></p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/events'><FaFutbol className='icons' id='football'></FaFutbol></a>
                </div>
            </div>

            <div className='parallax' id='register'>
              <div className='right_float'>
                  <h1>Social</h1>
                  <p><b>Get in touch and share your activities and milestones with your friends.</b></p>
                  <p><b>Look for elements that can fill the vacancy that is missing in your group.</b></p>
                  <FaArrowDown></FaArrowDown>
                  <br/>
                  <a href='/signup'><FaBasketballBall className='icons' id='basketball'></FaBasketballBall></a>
                </div>
            </div>
            {component}
        </div>
      );
    }

  export default Home