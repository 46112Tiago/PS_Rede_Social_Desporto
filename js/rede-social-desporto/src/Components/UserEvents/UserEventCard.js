import React from 'react';
import './UserEventCard.css'
import CancelBtn from './CancelBtn/CancelBtn';
import { FaCalendarDay, FaMapMarker, FaRunning } from 'react-icons/fa';

const UserEventCard = (props) => {

    const cancel = props.created == 'created' ? <CancelBtn id={props.id}/> : <></>
  
      return (
        <div>
              <div className="cardEvents">
                <div className="face face1">
                  <div className="contentEvent">
                    <h3>Event name</h3>
                    <p> <FaMapMarker></FaMapMarker> Localização</p> 
                    <p> <FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p> <FaRunning></FaRunning> Modalidade</p>
                  </div>
                </div>
                <div className="face face2">
                      <div className="contentEvent">
                        <p>Summary</p>
                        {/*Add in the read me the image and the description in a pop up */}
                        <a href="#">Read me</a>
                        {cancel}
                      </div>
                  </div>
              </div>              
        </div>
      );
    }
  

  export default UserEventCard