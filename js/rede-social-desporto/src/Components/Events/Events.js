import React from 'react';
import './Events.css'
import EventCard from './EventCard';
import { event } from '../../Model/Model';

const Events = () => {
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
    
  const [eventArray, setEvent] = React.useState([event]);
  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch("http://localhost:8080/event");
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
        <div id='heigthEdit'>
          <div id='editContainer'>
          {eventArray.map((eventObj,i) => 
              <EventCard key={i} eventObj={eventObj}></EventCard>
          )}
          </div>
        </div>
      );
    }

  export default Events