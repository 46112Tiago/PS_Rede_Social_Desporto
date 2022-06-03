import React from 'react';
import './UserCreateEvent.css'
import UserEventModal from './UserEventModal';
const UserCreateEvent = (props) => {
  
      return (
            <div className="cardCreateEvents">
                <UserEventModal created={props.created}></UserEventModal>
            </div>
      );
    }

  export default UserCreateEvent