import React from 'react';
import './UserEvent.css'
import UserEventParticipating from './UserEventParticipating/UserEventParticipating';
import UserEventCreated from './UserEventCreated/UserEventCreated';
import Paging from '../Paging/Paging';

const UserEvent = () => {
  
const [component, setComponent] = React.useState(<UserEventCreated/>);
const [changeComponent, setChange] = React.useState(0);

  React.useEffect(() => {
    console.log(1)
  },[changeComponent]);

      return (
        <div>
          <div className="radio" >
            <input label="Created" type="radio" id="created" name="eventUser" value="created" onChange={() => {
              setChange(1)
              setComponent(<UserEventCreated/>)}} defaultChecked/>
            <input label="Participating" type="radio" id="participating" name="eventUser" value="participating" onChange={() => {
              setChange(2)
              setComponent(<UserEventParticipating/>)}}/>
          </div>
          {component}
          <Paging/>
        </div>
      );
    }
  

  export default UserEvent