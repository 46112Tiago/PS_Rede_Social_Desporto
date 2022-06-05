import React from 'react';
import './SeeParticipant.css'
import DeleteParticipant from '../DeleteParticipant/DeleteParticipant';
import { useAuth0 } from "@auth0/auth0-react";
import { user } from '../../../../Model/Model';

const SeeParticipant = (props) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [participantArray, setParticipants] = React.useState([user]);
  const {getAccessTokenSilently} = useAuth0();

  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const token = await getAccessTokenSilently();
        const myHeaders = new Headers()
        myHeaders.append('Authorization',`Bearer ${token}`)
        const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
        };
        const req =  await fetch(`http://localhost:8080/group/${props.groupId}/participant`,options);
        const resp = await req.json();
        setParticipants(resp);
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoading) makeRequest();
  },[]);

      return (
        <>  
        <fieldset>
            {
                participantArray.map((participant,i)=>
                <div key={i}>
                    <div className='participantDiv'>
                        <h3>{participant.firstName} {participant.lastName}</h3>
                        {props.owner && participant.participantId != window.name  ? <DeleteParticipant groupId={props.groupId} participantId={participant.userId}/> : <></>}
                    </div> 
                </div>

                )
            }
        </fieldset>
        </>

      );
    }
  export default SeeParticipant