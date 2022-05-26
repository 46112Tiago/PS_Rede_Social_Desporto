import React from 'react';
import '../EventCard.css'

const ParticipateEvent = (props) => {

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function participate() {

    const options = {
        method: "POST",
        mode: 'cors',
    };

    fetch(`http://localhost:8080/user/1/event/${props.eventId}`, options)

}

  return (
          <div id='userEventForm'>
            <button className = 'eventBtn' onClick={participate}>Participate</button>
          </div>
  );
}


  export default ParticipateEvent