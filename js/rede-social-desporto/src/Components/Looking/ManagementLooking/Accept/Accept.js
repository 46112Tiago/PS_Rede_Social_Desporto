import React from 'react';
import './Accept.css'
import { useAuth0 } from "@auth0/auth0-react";
import { lookingPlayers, user } from '../../../../Model/Model';
import Paging from '../../../Paging/Paging';
import AcceptBtn from './AcceptBtn/AcceptBtn';

const Accept = (props) => {

    const setPaging = (offset) => {
        setPage(offset)
      }
    
      const [page, setPage] = React.useState(0);
      const [forward, setForward] = React.useState(true);
      const [isLoading, setIsLoading] = React.useState(false);
      const [error, setError] = React.useState();
      const [lookingMadeArray, setLooking] = React.useState([user]);
      const [lookingInfo, setLookingInfo] = React.useState(lookingPlayers);
      const [sport, setSport] = React.useState('')
      const {getAccessTokenSilently} = useAuth0();
    
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
              const req =  await fetch(`http://localhost:8080/lookingPlayers/accept/${window.name}?page=${page}`,options);
              const resp = await req.json();
              const response = resp[0]
              if(!response) {
                setForward(false)
                return
              }

              setLookingInfo(response)
              setLooking(response.participants)
              setSport(response.sports.name)
              setForward(true)
              
            } catch (err) {
              setError(err);
              //console.log(err);
            } finally {
              setIsLoading(false);
              
            }
          };
      
          if (!isLoading) makeRequest();
        },[lookingMadeArray,page]);

    return (
    <>
            {lookingMadeArray.map((lookingObj,key)=>{
              if(lookingObj.id != 0){
                    <div className='cardContainer' key={key}>
                        <div className="card accept">
                        <p>{lookingObj.firstName} {lookingObj.lastName}</p>
                            <img src={require('../../img/default_profile.jpg')}></img>
                            <div className='btnContainer'>
                              <button className='infoLooking'onClick={()=>{
                                  props.getLookingPlayers(lookingInfo)
                                  props.getCompound(lookingInfo.compound)
                                  window.location.href = "#looking-modal"}}>Info</button>
                              <AcceptBtn lookingId={lookingInfo.id} userId={lookingObj.userId}/>      
                            </div>            
                        </div>
                    </div>
            }})}

        <div id='pagingMade'>
            <Paging paging={setPaging} page={page} forward={forward}/>     
        </div>
    </>
      
    );
  }

  export default Accept