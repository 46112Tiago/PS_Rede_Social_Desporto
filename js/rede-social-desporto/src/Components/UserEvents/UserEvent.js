import React from 'react';
import './UserEvent.css'
import UserEventCard from './UserEventCard';

class UserEvent extends React.Component {
  
    render() {
      return (
            <div className='containerEvents'>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
            </div>
      );
    }
  }

  export default UserEvent