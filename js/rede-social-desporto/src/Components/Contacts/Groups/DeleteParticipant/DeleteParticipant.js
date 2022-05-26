import React from 'react';
import './DeleteParticipant.css'
import {AiFillDelete} from 'react-icons/ai'

const DeleteParticipant = (props) => {

    const deleteMethod = {
        method: 'delete',
        mode: 'cors'
    }

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
    const makeRequest = async (props) => {

        try {
            const confirmation = window.confirm("Do you want to remove this participant from the group")
            if(!confirmation) return
            const response = await fetch(`http://localhost:8080/group/1/participant/${props.participantId}`, deleteMethod);
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
    <div id='deleteParticipant'>
        <button onClick={makeRequest} id='deleteParticipantBtn'><AiFillDelete></AiFillDelete></button>
    </div>
  );
}


  export default DeleteParticipant