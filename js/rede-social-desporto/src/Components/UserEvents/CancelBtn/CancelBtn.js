import React from 'react';
import '../UserEventCard.css'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../Model/Model';

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
    const response = await fetch(`${api_url}/event/${props.id}`, options)
    if(response.status == 200){
      props.cancel(props.id)
    }
}

  
      return (
        <div>
            <br/>
            <button onClick={canceled}>Cancel</button>
        </div>
      );
    }
  

  export default CancelBtn