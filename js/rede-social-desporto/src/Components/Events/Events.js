import React from 'react';
import './Events.css'
import EventCard from './EventCard';
import Paging from '../Paging/Paging';
import { event } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";

const Events = () => {

  const setPaging = (offset) => {
    setPage(offset)
  }

  const limit = 2
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [eventArray, setEvent] = React.useState([event]);
  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);
  const {getAccessTokenSilently,isAuthenticated} = useAuth0();

  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        let resp
        try {
          let req;
          if(isAuthenticated){
            const token = await getAccessTokenSilently();
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
            };
            req =  await fetch(`http://localhost:8080/user/${window.name}/event?page=${page}`,options);
          }else{
            req =  await fetch(`http://localhost:8080/event?page=${page}`);
          }           
          resp = await req.json();
          if(resp.length < limit){
            setForward(false)
          }else{
            setForward(true)
          }
          resp.length == 0 ? setPage(page-1) : setEvent(resp);

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
            {eventArray.map((eventObj,i) => {
              if(eventObj.id != 0){
                return(<EventCard key={i} eventObj={eventObj}></EventCard>)
              }
            }
            )}
            </div>
          </div>
          <Paging paging={setPaging} page={page} forward={forward}/>
        </>
      );
    }

  export default Events