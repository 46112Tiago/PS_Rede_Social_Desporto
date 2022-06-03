import React from "react";
import './ReadModal.css'
import { FaCalendarDay,FaMapMarker} from 'react-icons/fa';

const ReadModal = (props) => {

  const lat = props.eventObj.compound ? props.eventObj.compound.location.x : 0
  const lng = props.eventObj.compound ? props.eventObj.compound.location.y : 0

      return (
        <div>
            <div id="user-event" className="modal">
                <div className="modal__content">
                    <a href={`https://www.google.com/maps/@${lat},${lng},15z`} target='_blank'> <FaMapMarker></FaMapMarker> {props.locationEvent}</a> 
                    <p> <FaCalendarDay></FaCalendarDay>Start: {props.eventObj.startDate}</p>  
                    <p> <FaCalendarDay></FaCalendarDay>End: {props.eventObj.plannedfinishDate}</p>
                    <h5>Description:</h5>
                    <p>{props.eventObj.description}</p> 
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default ReadModal