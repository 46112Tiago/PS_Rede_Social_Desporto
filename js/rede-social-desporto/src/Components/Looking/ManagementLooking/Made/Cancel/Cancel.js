import React from 'react';
import '../Made.css'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../../../Model/Model';

const Cancel = (props) => {

    const {getAccessTokenSilently} = useAuth0()
    const myHeaders = new Headers()

    const makeRequest = async () => {
        try {
            const token = await getAccessTokenSilently()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
                method: "DELETE",
                headers: myHeaders,
                mode: 'cors',
            };
            const response = await fetch(`${api_url}/lookingPlayers/${props.lookingId}`, options);
        } catch (error) {
            console.log('Error: ' + error);
        }
    };

    return (
    <>
        <button className='cancelLooking' onClick={makeRequest}>Cancel</button>
    </>
      
    );
  }

  export default Cancel