import React from 'react';
import '../EventCard.css'
import { useAuth0 } from "@auth0/auth0-react";

const ParticipateEvent = (props) => {

  const myHeaders = new Headers()
  const {getAccessTokenSilently} = useAuth0();

  async function participate() {
    const token = await getAccessTokenSilently();
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
      method: "POST",
      headers: myHeaders,
      mode: 'cors',
    };
    const response = await fetch(`http://localhost:8080/user/1/event/${props.eventId}`, options)

}

  return (
          <div id='userEventForm'>
            <button className = 'eventBtn' onClick={participate}>Participate</button>
          </div>
  );
}


  export default ParticipateEvent