import React from 'react';
import '../EventCard.css'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../Model/Model';

const ParticipateEvent = (props) => {

  const myHeaders = new Headers()
  const {getAccessTokenSilently,user} = useAuth0();

  async function participate() {
    const token = await getAccessTokenSilently();
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
      method: "POST",
      headers: myHeaders,
      mode: 'cors',
    };
    const email = user.email.split("@")[0]
    const response = await fetch(`${api_url}/user/event/${props.eventId}?email=${email}`, options)
    if(response.status==200){
      props.participate(props.eventId)
    }

}

  return (
          <div id='userEventForm'>
            <button className = 'eventBtn' onClick={participate}>Participate</button>
          </div>
  );
}


  export default ParticipateEvent