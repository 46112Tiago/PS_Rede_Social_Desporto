import React from 'react';
import '../UserEventCard.css'
import { useAuth0 } from "@auth0/auth0-react";

const CancelBtn = (props) => {
  const {getAccessTokenSilently} = useAuth0();

  async function canceled() {

    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
      method: "PUT",
      headers: myHeaders,
      mode: 'cors',
    };
    const response = await fetch(`http://localhost:8080/event/${props.id}`, options)

}

  
      return (
        <div>
            <br/>
            <button onClick={canceled}>Cancel</button>
        </div>
      );
    }
  

  export default CancelBtn