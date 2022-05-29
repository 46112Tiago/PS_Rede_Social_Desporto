import React from 'react';
import './ProfileSearch.css'
import ProfileCards from './ProfileCards';
import SearchBar from '../SearchBar/SearchBar'
import Paging from '../Paging/Paging'
import { user } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";

const ProfileSearch = (props) =>  {

  const setQueryName = (nameValue) => {
    setName(nameValue)
  }

  const setPaging = (offset) => {
    setPage(offset)
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const {getAccessTokenSilently} = useAuth0();
  const [userArray, setUsers] = React.useState([user]);
  const [nameV, setName] = React.useState("");
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
        if(!nameV) return
        const token = await getAccessTokenSilently();
        const myHeaders = new Headers()
        myHeaders.append('Authorization',`Bearer ${token}`)
        const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
      };
        const req =  await fetch(`http://localhost:8080/user/search?page=${page}&name=${nameV.name}`,options);
        const resp = await req.json();
        setUsers(resp);
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
  },[nameV,page]);
  
      return (
        <div>
            <SearchBar setName={setQueryName}></SearchBar>
            <div className='containerCards'>
              {
                userArray.map((userObj,key)=>
                  <ProfileCards key={key} userId={userObj.userId} userFName={userObj.firstName} userLName={userObj.lastName}></ProfileCards>
                )
              }
            </div>
            <Paging paging={setPaging} page={page} forward={forward}/>
        </div>
      );
    }

  export default ProfileSearch