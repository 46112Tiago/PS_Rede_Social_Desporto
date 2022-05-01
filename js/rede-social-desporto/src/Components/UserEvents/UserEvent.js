import React from 'react';
import './UserEvent.css'
import UserEventCard from './UserEventCard';
import UserCreateEvent from './UserEventCreate/UserCreateEvent';

class UserEvent extends React.Component {
  
    render() {
      return (
            <div className='containerEvents'>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>


                <UserCreateEvent></UserCreateEvent>
            </div>
      );
    }
  }

  export default UserEvent