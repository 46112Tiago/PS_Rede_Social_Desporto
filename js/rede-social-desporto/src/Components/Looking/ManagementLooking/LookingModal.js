import React from "react";
import './LookingBody.css'

const LookingModal = (props) => {

      return (
        <div>
            <div id="looking-modal" className="modalLooking">
                <div className="modal_looking_content">
                    <h1>Info:</h1>
                    <p>Date/Hour:</p>
                    <p>{props.lookingInfo.startDateTime}</p>
                    <p>Sport: {props.sport}</p>
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default LookingModal