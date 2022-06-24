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
          {  /*
        
              The MIT License (MIT)

              Copyright (c) 2022 by Marko (https://codepen.io/denic/pen/ZEbKgPp)

              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:

              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.

              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
  
        */}      
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