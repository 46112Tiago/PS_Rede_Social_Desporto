import React from 'react';
import './EventCard.css'
import { FaCalendarDay, FaMapMarker, FaUserCheck, FaRunning } from 'react-icons/fa';

class EventCard extends React.Component {
  
    render() {
      return (
          <div id='evnetCardCon'>
        <div id='eventCardContainer'>
            
            <div id='eventCardLeft'>
                <div id='eventCardImage'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
            </div>

            <div id='eventCardRight'>
                <div id='eventCardText'>
                    <h2>Title</h2>
                </div>

                <div id='eventCardInfo'>
                    
                    <div id='eventCardInfoLeft'>
                        <p><FaMapMarker></FaMapMarker><b> Instituto Superior de Engenharia de Lisboa </b></p> 
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b> 01/04/2022 </b></p>  
                        <p className='inline' id='modalidade'><FaRunning></FaRunning> <b> Modalidade </b> </p>
                        <p className='inline'><FaUserCheck></FaUserCheck> <b> 8 / 30 </b> </p>
                    </div>

                    <div id='eventCardInfoRight'>
                        <div id='eventSummary'>
                            <h4>Summary</h4>
                            <p>A little summary about the event that will be realized</p>
                        </div>
                        <div id='eventBtnContainer'>
                            <button className = 'eventBtn'>Descrição</button>
                            <br></br>
                            <button className = 'eventBtn'>Participar</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>
      );
    }
  }

  export default EventCard