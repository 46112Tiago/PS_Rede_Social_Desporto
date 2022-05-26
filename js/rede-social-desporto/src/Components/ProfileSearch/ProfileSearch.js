import React from 'react';
import './ProfileSearch.css'
import ProfileCards from './ProfileCards';
import SearchBar from '../SearchBar/SearchBar'
import Paging from '../Paging/Paging'
import { user } from '../../Model/Model';

const ProfileSearch = (props) =>  {

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  
  const [userArray, setUsers] = React.useState([user]);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/search?name=");
        const resp = await req.json();
        setUsers(resp);
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
            <SearchBar></SearchBar>
            <div className='containerCards'>
              {
                userArray.map((userObj,key)=>
                  <ProfileCards key={key} userId={userObj.userId} userFName={userObj.firstName} userLName={userObj.lastName}></ProfileCards>
                )
              }
                <ProfileCards userId={1}></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
            </div>
            <Paging/>
        </div>
      );
    }

  export default ProfileSearch