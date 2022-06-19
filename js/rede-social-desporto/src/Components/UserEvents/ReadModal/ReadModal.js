import React from "react";
import './ReadModal.css'
import { FaCalendarDay,FaMapMarker,FaRunning} from 'react-icons/fa';

const ReadModal = (props) => {

  const lat = props.eventObj.compound ? props.eventObj.compound.location.x : 0
  const lng = props.eventObj.compound ? props.eventObj.compound.location.y : 0
  const location = props.eventObj.compound ? props.eventObj.compound.name : '' 
  const startDate = props.eventObj.startDate? props.eventObj.startDate.split("T") : ''
  const plannedfinishDate = props.eventObj.plannedfinishDate? props.eventObj.plannedfinishDate.split("T") : ''

      return (
        <div>
            <div id={`user-event-${props.eventObj.id}`} className="modal">
                <div className="modal__content">
                    <a href={`https://www.google.com/maps/@${lat},${lng},15z`} target='_blank'> <FaMapMarker></FaMapMarker> {location}</a> 
                    <p> <FaCalendarDay></FaCalendarDay>Start: {startDate[0]} {startDate[1]}</p>  
                    <p> <FaCalendarDay></FaCalendarDay>End: {plannedfinishDate[0]} {plannedfinishDate[1]}</p>
                    <p> <FaRunning></FaRunning> {props.sport}</p>
                    <h5>Description:</h5>
                    <p>{props.eventObj.description}</p> 
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default ReadModal