import React from "react";
import { HiPlus } from 'react-icons/hi';
import './UserEventModal.css'
import UserEventForm from "./UserEventForm";

const UserEventModal = (props) => {

      return (
        <div>
            <div>
                <a id="activateModal_userEvent" href="#demo-modal" className="textEvent"><HiPlus></HiPlus></a>
            </div>
            
            <div id="demo-modal" className="modal_userEvent">
                <div className="modal__content_userEvent">
                   <UserEventForm created={props.created}></UserEventForm>
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default UserEventModal