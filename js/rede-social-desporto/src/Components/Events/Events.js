import React from 'react';
import './Events.css'
import EventCard from './EventCard';

class Events extends React.Component {
  
    render() {
      return (
        <div id='heigthEdit'>
          <div id='editContainer'>
              <EventCard></EventCard>
          </div>
        </div>
      );
    }
  }

  export default Events