import React from 'react';
import './EventCard.css'
import { FaCalendarDay, FaMapMarker, FaUserCheck, FaRunning } from 'react-icons/fa';
import EventModal from './EventModal';
import ParticipateEvent from './Participate/ParticipateEvent';
import { useAuth0 } from "@auth0/auth0-react";

const EventCard = (props) => {

    const {isAuthenticated} = useAuth0();

  
    const participate = isAuthenticated ? <ParticipateEvent eventId={props.eventObj.id} participate={props.participate}></ParticipateEvent> : <></>
    const startDate = props.eventObj.startDate? props.eventObj.startDate.split("T") : ''
    const plannedfinishDate = props.eventObj.plannedfinishDate? props.eventObj.plannedfinishDate.split("T") : ''

      return (
          <div id='evnetCardCon'>
            <div id='eventCardContainer'>
                <div id='eventCardTop'>
                    <h2>{props.eventObj.name}</h2>
                </div>
                <div id='eventCardContent'>
                    <div id='eventCardLeft'>
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b>{startDate[0]} {startDate[1]}</b></p>  
                        <p className='inline' id='data'><FaCalendarDay></FaCalendarDay><b>{plannedfinishDate[0]} {plannedfinishDate[1]}</b></p>  
                        <p className='inline' id='modalidade'><FaRunning></FaRunning> <b>{props.eventObj.sport.name}</b> </p>
                        <p className='inline'><FaUserCheck></FaUserCheck> <b> {props.eventObj.limitParticipants} </b> </p>
                    </div>

                    <div id='eventCardRight'>
                    <p><FaMapMarker></FaMapMarker><b>{props.eventObj.compound.name}</b></p> 
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
                        {participate}
                    </div>

                </div>

            </div>
        </div>
      );
    }
  

  export default EventCard