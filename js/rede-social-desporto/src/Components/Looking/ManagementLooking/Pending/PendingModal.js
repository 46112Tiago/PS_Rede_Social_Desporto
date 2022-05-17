import React from "react";
import './Pending.css'

const PendingModal = (props) => {

      return (
        <div>
            <div id="pending-modal" className="modalPending">
                <div className="modal_pending_content">
                    <h1>Info:</h1>

                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default PendingModal