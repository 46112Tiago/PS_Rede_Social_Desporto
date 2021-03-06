import React from 'react';
import './Events.css'
import EventCard from './EventCard';
import Paging from '../Paging/Paging';
import { api_url, event } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";

const Events = () => {

  const setPaging = (offset) => {
    setPage(offset)
  }

  const setParticipate = (value) => {
    setParticipating(value)
  }

  const limit = 2
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [eventArray, setEvent] = React.useState([event]);
  const [page, setPage] = React.useState(0);
  const [participate, setParticipating] = React.useState(0);
  const [forward, setForward] = React.useState(true);
  const {getAccessTokenSilently,isAuthenticated,user} = useAuth0();

  
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
            const email = user.email.split("@")[0]
            req =  await fetch(`${api_url}/user/event?page=${page}&email=${email}`,options);
          }else{
            req =  await fetch(`${api_url}/event?page=${page}`);
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
    },[page,participate]);


      return (
        <>
          <div id='heigthEdit'>
            <div id='editContainer'>
            {eventArray.map((eventObj,i) => {
              if(eventObj.id != 0){
                return(<EventCard key={i} eventObj={eventObj} participate={setParticipate}></EventCard>)
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