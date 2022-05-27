import React from 'react';
import './Events.css'
import EventCard from './EventCard';
import Paging from '../Paging/Paging';
import { event } from '../../Model/Model';
import  userId  from '../../Global/Global';

const Events = () => {

  const setPaging = (offset) => {
    setPage(offset)
  }
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [eventArray, setEvent] = React.useState([event]);
  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);

  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch(`http://localhost:8080/event?page=${page}`);
          const resp = await req.json();
          setEvent(resp);
          if(!resp[0]){
            setForward(false)
          }else{
            setForward(true)
          }
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[page]);


      return (
        <>
          <div id='heigthEdit'>
            <div id='editContainer'>
            {eventArray.map((eventObj,i) => 
                <EventCard key={i} eventObj={eventObj}></EventCard>
            )}
            </div>
          </div>
          <Paging paging={setPaging} page={page} forward={forward}/>
        </>
      );
    }

  export default Events