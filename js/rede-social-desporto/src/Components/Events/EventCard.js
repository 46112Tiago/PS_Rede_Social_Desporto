import React from 'react';
import './EventCard.css'
import { FaCalendarDay, FaMapMarker, FaUserCheck, FaRunning } from 'react-icons/fa';
import EventModal from './EventModal';
import ParticipateEvent from './Participate/ParticipateEvent';

const EventCard = (props) => {
  
      return (
          <div id='evnetCardCon'>
            <div id='eventCardContainer'>
                <div id='eventCardTop'>
                    <h2>Title</h2>
                </div>
                <div id='eventCardContent'>
                    <div id='eventCardLeft'>
                        <p><FaMapMarker></FaMapMarker><b> Instituto Superior de Engenharia de Lisboa </b></p> 
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b> 01/04/2022</b>  <b>- 03/04/2022</b></p>  
                        <p className='inline' id='modalidade'><FaRunning></FaRunning> <b> Modalidade </b> </p>
                        <p className='inline'><FaUserCheck></FaUserCheck> <b> 8 / 30 </b> </p>
                    </div>

                    <div id='eventCardRight'>
                        <h4>Summary</h4>
                        <p>A little summary about the event that will be realized</p>
                    </div>
                </div>

                <div id='eventBtnContainer'>
                    <div className='btnEvent'>
                        <EventModal eventId={1}></EventModal>
                        
                    </div>
                    <br></br>
                    <div>
                        <ParticipateEvent eventId={1}></ParticipateEvent>
                    </div>

                </div>

            </div>
        </div>
      );
    }
  

  export default EventCard