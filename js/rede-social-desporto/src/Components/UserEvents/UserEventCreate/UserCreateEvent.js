import React from 'react';
import './UserCreateEvent.css'
import UserEventModal from './UserEventModal';
class UserCreateEvent extends React.Component {
  
    render() {
      return (
            <div className="cardCreateEvents">
                <UserEventModal></UserEventModal>
            </div>
      );
    }
  }

  export default UserCreateEvent