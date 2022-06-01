import React from 'react';
import '../UserEvent.css'
import UserEventCard from '../UserEventCard';
import UserCreateEvent from '../UserEventCreate/UserCreateEvent';
import { event } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";

const UserEventCreated = () => {
  

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const {getAccessTokenSilently} = useAuth0();
  const [eventArray, setEvent] = React.useState([event]);
  
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
          const req =  await fetch(`http://localhost:8080/user/${window.name}/event/created`,options);
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
                  <UserEventCard key={i} created={'created'} eventObj={eventObj}></UserEventCard>
              )}
                <UserCreateEvent></UserCreateEvent>
            </div>
      );
    }
  

  export default UserEventCreated