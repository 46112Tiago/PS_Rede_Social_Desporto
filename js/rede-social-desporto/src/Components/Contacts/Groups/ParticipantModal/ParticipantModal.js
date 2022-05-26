import React from 'react';
import { user } from "../../../../Model/Model";
import './ParticipantModal.css'
import AddParticipant from '../AddParticipant/AddParticipant';
import SeeParticipant from '../SeeParticipants/SeeParticipant';
import { propTypes } from 'react-bootstrap/esm/Image';

const ParticipantModal = () => {


    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [friendsArray, setFriends] = React.useState([user]);

    const [component, setComponent] = React.useState(<></>);


    React.useEffect(() => {

    },[component]);
  
    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const req =  await fetch("http://localhost:8080/user/1/friend");
            const resp = await req.json();
            setFriends(resp);
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
            <div id="add-participant-modal" className="modal_participant">
                <div className="modal__content_participant">
                    <a href="#" className="modal__close">&times;</a>
                    <h1>Participants:</h1>
                    <div id='radioP'>
                      <div className="radioParticipant" >
                        <input label="Add Participants" type="radio" id="add" name="participant" value="Add" onChange={() => {setComponent(<AddParticipant friendsArray={[1,2]}/>)}} />
                        <input label="See Participants" type="radio" id="see" name="participant" value="See" onChange={() => {setComponent(<SeeParticipant friendsArray={[1,2]} owner={propTypes.owner}  />)}} />
                      </div>
                    </div>
                    {component}
                </div>
            </div>
        </>

      );
    }
  export default ParticipantModal