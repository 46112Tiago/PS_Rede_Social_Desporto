import React from 'react';
import '../UserEvent.css'
import UserEventCard from '../UserEventCard';
import UserCreateEvent from '../UserEventCreate/UserCreateEvent';
import { event } from '../../../Model/Model';

const UserEventCreated = () => {
  

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
    
  const [eventArray, setEvent] = React.useState([event]);
  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch("http://localhost:8080/user/1/event/created");
          const resp = await req.json();
          setEvent(resp);
          
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

        
            <div className='containerEvents'>
              {eventArray.map((eventObj,i) => 
                  <UserEventCard key={i} eventObj={eventObj}></UserEventCard>
              )}
                <UserEventCard created={'created'}></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserCreateEvent></UserCreateEvent>
            </div>
      );
    }
  

  export default UserEventCreated