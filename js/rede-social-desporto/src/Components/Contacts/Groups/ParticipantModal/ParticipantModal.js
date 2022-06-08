import React from 'react';
import { user } from "../../../../Model/Model";
import './ParticipantModal.css'
import AddParticipant from '../AddParticipant/AddParticipant';
import SeeParticipant from '../SeeParticipants/SeeParticipant';

const ParticipantModal = (props) => {


    const [groupId, setId] = React.useState(0);
    const [component, setComponent] = React.useState(<></>);

    React.useEffect(() => {
      setId(props.groupId)
    },[component,groupId]);
  
      return (
        <>  
            <div id={`add-participant-modal-${props.groupId}`} className="modal_participant">
                <div className="modal__content_participant">
                    <a href="#" className="modal__close" onClick={()=>{
                      document.getElementById('add').checked=false
                      document.getElementById('see').checked=false
                      setComponent(<></>)
                      
                      }}>&times;</a>
                    <h1>Participants:</h1>
                    <div id='radioP'>
                      <div className="radioParticipant" >
                        <input label="Add Participants" type="radio" id="add" name="participant" value="Add" onChange={() => {setComponent(<AddParticipant groupId={props.groupId}  />)}} />
                        <input label="See Participants" type="radio" id="see" name="participant" value="See" onChange={() => {setComponent(<SeeParticipant groupId={props.groupId} owner={props.owner} />)}} />
                      </div>
                    </div>
                    {component}
                </div>
            </div>
        </>

      );
    }
  export default ParticipantModal