import React from 'react';
import { api_url } from '../../Model/Model';
import './EventDelete.css'

const EventDelete = () => {

    const deleteMethod = {
        method: 'delete',
        mode: 'cors'
    }

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
    const makeRequest = async () => {

        try {
            const response = await fetch(`${api_url}/field/8`, deleteMethod);
            if (!response.ok) {
              const message = 'Error with Status Code: ' + response.status;
              throw new Error(message);
            }
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.log('Error: ' + error);
          }
    };

  return (
    <div>
        <button onClick={makeRequest}>Delete</button>
    </div>
  );
}


  export default EventDelete