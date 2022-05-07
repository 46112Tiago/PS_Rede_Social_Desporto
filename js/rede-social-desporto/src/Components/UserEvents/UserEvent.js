import React from 'react';
import './UserEvent.css'
import UserEventParticipating from './UserEventParticipating/UserEventParticipating';
import UserEventCreated from './UserEventCreated/UserEventCreated';

const UserEvent = () => {
  
const [component, setComponent] = React.useState(<UserEventCreated/>);


  React.useEffect(() => {

  },[component]);

      return (
        <div>

        <div className="radio" >
          <input label="Created" type="radio" id="created" name="eventUser" value="created" onChange={() => {setComponent(<UserEventCreated/>)}} defaultChecked/>
          <input label="Participating" type="radio" id="participating" name="eventUser" value="participating" onChange={() => {setComponent(<UserEventParticipating/>)}}/>
        </div>
        
        {component}
            </div>
      );
    }
  

  export default UserEvent