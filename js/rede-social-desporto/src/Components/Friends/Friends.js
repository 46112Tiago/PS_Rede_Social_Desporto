import React from 'react';
import './Friends.css'
import ProfileCards from '../ProfileSearch/ProfileCards';
import { user } from '../../Model/Model';
import Paging from '../Paging/Paging';

const Friends = (props) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  
  const [friendArray, setFriends] = React.useState([user]);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/3/friend");
        const resp = await req.json();
        setFriends(resp);
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
            <Paging/>
        </div>
      );
    }

  export default Friends