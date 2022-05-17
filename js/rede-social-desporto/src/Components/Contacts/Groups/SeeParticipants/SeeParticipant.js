import React from 'react';
import './SeeParticipant.css'
import DeleteParticipant from '../DeleteParticipant/DeleteParticipant';

const SeeParticipant = (props) => {

    const participantArray = props.friendsArray ? props.friendsArray : [] 

      return (
        <>  
        <fieldset>
            {
                participantArray.map((participant,i)=>
                <div>
                    <div className='participantDiv'>
                        <h3>{participant.firstname} {participant.lastname} Name Surname</h3>
                        {/*props.owner*/ true ? <DeleteParticipant participantId={participant.participantId}/> : <></>}
                    </div> 
                </div>

                )
            }
        </fieldset>
        </>

      );
    }
  export default SeeParticipant