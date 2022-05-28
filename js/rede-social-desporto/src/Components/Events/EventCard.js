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
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b>{props.eventObj.startDate}</b></p>  
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b>{props.eventObj.plannedfinishDate}</b></p>  
                        <p className='inline' id='modalidade'><FaRunning></FaRunning> <b> Modalidade </b> </p>
                        <p className='inline'><FaUserCheck></FaUserCheck> <b> {props.eventObj.limitParticipants} </b> </p>
                    </div>

                    <div id='eventCardRight'>
                    <p><FaMapMarker></FaMapMarker><b> Instituto Superior de Engenharia de Lisboa </b></p> 
                        <h4>Summary</h4>
                        <p>{props.eventObj.summary}</p>
                    </div>
                </div>

                <div id='eventBtnContainer'>
                    <div className='btnEvent'>
                        <EventModal eventId={props.eventObj.id}></EventModal>
                    </div>
                    <br></br>
                    <div>
                        <ParticipateEvent eventId={props.eventObj.id}></ParticipateEvent>
                    </div>

                </div>

            </div>
        </div>
      );
    }
  

  export default EventCard