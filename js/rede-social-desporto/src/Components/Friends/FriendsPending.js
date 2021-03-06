import React from 'react';
import './Friends.css'
import ProfileCards from '../ProfileSearch/ProfileCards';
import { api_url, user } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import Paging from '../Paging/Paging';

const FriendsPending = (props) => {

  const setPaging = (offset) => {
    setPage(offset)
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [friendArray, setFriends] = React.useState([]);
  const {getAccessTokenSilently,user} = useAuth0();
  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);
  const limit = 4
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
        const email = user.email.split("@")[0]
        const req =  await fetch(`${api_url}/user/friend/request?page=${page}&email=${email}`,options);
        const resp = await req.json();
        if(resp.length < limit){
          setForward(false)
        }else{
          setForward(true)
        }
        resp.length == 0 ? setPage(page-1) : setFriends(resp);
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
                  <ProfileCards key={key} email={friendObj.email} userFName={friendObj.firstName} userLName={friendObj.lastName}></ProfileCards>
                )
              }
            </div>
            <Paging paging={setPaging} page={page} forward={forward}/>
        </div>
      );
    }

  export default FriendsPending