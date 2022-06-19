import React from 'react';
import '../UserEvent.css'
import UserEventCard from '../UserEventCard';
import UserCreateEvent from '../UserEventCreate/UserCreateEvent';
import { event } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import Paging from '../../Paging/Paging';
import ReadModal from '../ReadModal/ReadModal';

const UserEventParticipating = () => {
  
  const setPaging = (offset) => {
    setPage(offset)
  }

  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const {getAccessTokenSilently} = useAuth0();
  const [eventArray, setEvent] = React.useState([event]);
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
          const req =  await fetch(`http://localhost:8080/user/${window.name}/event/participating?page=${page}`,options);
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
    },[eventArray,page]);

      return (

        <>
          <div className='containerEvents'>
              {eventArray.map((eventObj,i) => {
                if(eventObj.id != 0){
                  return(
                    <>
                      <UserEventCard eventObj={eventObj}></UserEventCard>
                    </>
              )}
              })}
            </div>
          <div id='pagingMade'>
            <Paging paging={setPaging} page={page} forward={forward}/>     
          </div>
        </>
      );
    }
  

  export default UserEventParticipating