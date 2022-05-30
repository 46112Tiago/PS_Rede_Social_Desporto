import React from 'react';
import '../Navigate.css'
import { useAuth0 } from "@auth0/auth0-react";

const Participate = (props) => {

    const {getAccessTokenSilently} = useAuth0()
    const myHeaders = new Headers()

    const makeRequest = async () => {
        try {
            const token = await getAccessTokenSilently()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
                method: "POST",
                headers: myHeaders,
                mode: 'cors',
            };
            const response = await fetch(`http://localhost:8080/lookingPlayers/${props.lookingId}/participant/${window.name}`, options);
        } catch (error) {
            console.log('Error: ' + error);
        }
    };

    return (
    <>
        <button className='participateLooking' onClick={makeRequest}>Participate</button>
    </>
      
    );
  }

  export default Participate