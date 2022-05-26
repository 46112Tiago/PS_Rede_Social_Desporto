import React from 'react';
import './Events.css'
import { FaCalendarDay, FaMapMarker, FaUserCheck, FaRunning } from 'react-icons/fa';
import EventDelete from './EventDelete';

const Events = () => {


      return (
                  <div>
            <div className='container'>

                <div className='images'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
                <div className='text'>
                    <h3>Events Title</h3>
                    <p>Some random description in order to demonstrate</p>
                    <p><FaMapMarker></FaMapMarker> Instituto Superior de Engenharia de Lisboa</p> 
                    <p className='inline' id='data'><FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p className='inline' id='modalidade'><FaRunning></FaRunning> Modalidade</p>
                    <p className='inline'><FaUserCheck></FaUserCheck> 8 / 30</p>
                    <br/>
                    <EventDelete></EventDelete> 
                    <button className='eventsBtn'>Participar</button>
                </div>

            </div>
            <div className='container'>
                <div className='images'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
                <div className='text'>
                    <h3>Events Title</h3>
                    <p>Some random description in order to demonstrate</p>
                    <p><FaMapMarker></FaMapMarker> Instituto Superior de Engenharia de Lisboa</p> 
                    <p className='inline' id='data'><FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p className='inline' id='modalidade'><FaRunning></FaRunning> Modalidade</p>
                    <p className='inline'><FaUserCheck></FaUserCheck> 8 / 30</p>
                    <br/>
                    <button className='eventsBtn'>Participar</button>
                </div>
            </div>
            <div className='container'>
                <div className='images'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
                <div className='text'>
                    <h3>Events Title</h3>
                    <p>Some random description in order to demonstrate</p>
                    <p><FaMapMarker></FaMapMarker> Instituto Superior de Engenharia de Lisboa</p> 
                    <p className='inline' id='data'><FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p className='inline' id='modalidade'><FaRunning></FaRunning> Modalidade</p>
                    <p className='inline'><FaUserCheck></FaUserCheck> 8 / 30</p>
                    <br/>
                    <button className='eventsBtn'>Participar</button>
                </div>
            </div>
            <div className='container'>
                <div className='images'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
                <div className='text'>
                    <h3>Events Title</h3>
                    <p>Some random description in order to demonstrate</p>
                    <p><FaMapMarker></FaMapMarker> Instituto Superior de Engenharia de Lisboa</p>
                    <p className='inline' id='data'><FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p className='inline' id='modalidade'><FaRunning></FaRunning> Modalidade</p>
                    <p className='inline'><FaUserCheck></FaUserCheck> 8 / 30</p>
                    <br/>
                    <button className='eventsBtn'>Participar</button>
                </div>            
            </div>
        </div>
      );
    }

  export default Events