import React from 'react';
import './Friends.css'
import ProfileCards from '../ProfileSearch/ProfileCards';
import { user } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import Paging from '../Paging/Paging';

const Friends = (props) => {

  const setPaging = (offset) => {
    setPage(offset)
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [friendArray, setFriends] = React.useState([user]);
  const {getAccessTokenSilently} = useAuth0();
  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
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
        const req =  await fetch(`http://localhost:8080/user/${window.name}/friend?page=${page}`,options);
        const resp = await req.json();
        setFriends(resp);
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
        <div>
            <div className='containerCards'>
              {
                friendArray.map((friendObj,key) => 
                  <ProfileCards key={key} userId={friendObj.userId} userFName={friendObj.firstName} userLName={friendObj.lastName}></ProfileCards>
                )
              }
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
            </div>
            <Paging paging={setPaging} page={page} forward={forward}/>
        </div>
      );
    }

  export default Friends