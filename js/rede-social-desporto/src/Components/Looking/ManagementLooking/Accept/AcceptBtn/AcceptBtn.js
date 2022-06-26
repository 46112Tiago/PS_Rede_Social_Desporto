import React from 'react';
import '../Accept.css'
import { useAuth0 } from "@auth0/auth0-react";

const AcceptBtn = (props) => {

    const {getAccessTokenSilently,user} = useAuth0()
    const myHeaders = new Headers()

    const makeRequest = async () => {
        try {
            const token = await getAccessTokenSilently()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
                method: "PUT",
                headers: myHeaders,
                mode: 'cors',
            };
            const email = user.email.split("@")[0]
            const response = await fetch(`http://localhost:8080/lookingPlayers/${props.lookingId}/confirm?email=${email}`, options);
        } catch (error) {
            console.log('Error: ' + error);
        }
    };

    return (
    <>
        <button className='acceptLooking' onClick={makeRequest}>Accept</button>
    </>
      
    );
  }

  export default AcceptBtn