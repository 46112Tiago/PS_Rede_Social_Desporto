import React from 'react';
import './DeleteSport.css'
import {AiFillDelete} from 'react-icons/ai'

const DeleteSport = (props) => {

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
            const response = await fetch(`http://localhost:8080/user/1/sports/${props.sportId}`, deleteMethod);
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
        <button onClick={makeRequest} id='deletebtn'><AiFillDelete></AiFillDelete></button>
    </div>
  );
}


  export default DeleteSport