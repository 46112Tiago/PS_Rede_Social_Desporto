import React from 'react';
import '../UserEvent.css'
import UserEventCard from '../UserEventCard';
import UserCreateEvent from '../UserEventCreate/UserCreateEvent';
import { api_url, event } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import Paging from '../../Paging/Paging';

const UserEventCreated = () => {

  const created = (data)=> {
    setCreated(data)
  }

  const setPaging = (offset) => {
    setPage(offset)
  }

  const getCancel = (canceled) => {
    setCancel(canceled)
  }

  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const {getAccessTokenSilently,user} = useAuth0();
  const [eventArray, setEvent] = React.useState([event]);
  const [create, setCreated] = React.useState(0);
  const [cancel, setCancel] = React.useState(0);
  const limit = 9

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
          const email = user.email.split('@')[0]
          const req =  await fetch(`${api_url}/user/event/created?page=${page}&email=${email}`,options);
          const resp = await req.json();
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
    },[create,eventArray,page,cancel]);

      return (

        <>
            <div className='containerEvents'>
              {eventArray.map((eventObj,i) => {
                if(eventObj.id != 0){
                  return(
                  <UserEventCard key={i} created={'created'} eventObj={eventObj} cancel={getCancel}></UserEventCard>
                )}})}
                <UserCreateEvent created={created}></UserCreateEvent>
            </div>
            <div id='pagingMade'>
              <Paging paging={setPaging} page={page} forward={forward}/>     
            </div>
        </>
      );
    }
  

  export default UserEventCreated