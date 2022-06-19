import React from "react";
import './LookingBody.css'

const LookingModal = (props) => {

      const lat = props.compound.location ? props.compound.location.x : 0
      const lng = props.compound.location ? props.compound.location.y : 0
      const parking = props.compound.parking ? 'Yes' : 'No'
      const dressingRoom = props.compound.dressingRoom == "N" ? 'No' : 'Yes'
      const sportName = props.sport ? props.sport.name : ''
      const participants = props.participants ? props.participants : []
      const startDateTime = props.lookingInfo.startDateTime? props.lookingInfo.startDateTime.split("T") : ''
  
      return (
        <div>
            <div id="looking-modal" className="modalLooking">
                <div className="modal_looking_content">
                    <h1>Info:</h1>
                    <p>Date/Hour:</p>
                    <p>{startDateTime[0]} {startDateTime[1]}</p>
                    <p>Sport: {sportName}</p>
                    <p>Compound: <a href={`https://www.google.com/maps/@${lat},${lng},15z`} target='_blank'>{props.compound.name}</a></p>
                    <p>Parking: {parking}</p>
                    <p>Dressing Room: {dressingRoom}</p>
                    <h4>Participants:</h4>
                    <ul>
                    {participants.map((participantsObj,key)=>
                      <li>{participantsObj.firstName} {participantsObj.lastName}</li>
                    )}
                    </ul>
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default LookingModal