import React from 'react';
import './Confirmed.css'
import { useAuth0 } from "@auth0/auth0-react";
import { lookingPlayers } from '../../../../Model/Model';
import Paging from '../../../Paging/Paging';

const Confirmed = (props) => {

    const setPaging = (offset) => {
        setPage(offset)
      }
    
      const [page, setPage] = React.useState(0);
      const [forward, setForward] = React.useState(true);
      const [isLoading, setIsLoading] = React.useState(false);
      const [error, setError] = React.useState();
      const [lookingMadeArray, setLooking] = React.useState([lookingPlayers]);
      const {getAccessTokenSilently,user} = useAuth0();
      const limit = 2
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
              const req =  await fetch(`http://localhost:8080/lookingPlayers?state=accepted&page=${page}&email=${email}`,options);
              const resp = await req.json();
              if(resp.length < limit){
                setForward(false)
              }else{
                setForward(true)
              }
              resp.length == 0 ? setPage(page-1) : setLooking(resp);
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
            return(
            <div className='cardContainer' key={key}>
                <div className="card confirmed">
                    <p>{lookingObj.creator.firstName} {lookingObj.creator.lastName}</p>
                    <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                    <div>
                        <button id="activateModal_pending" className='infoLooking'onClick={()=>{
                  props.getLookingPlayers(lookingObj)
                  props.getCompound(lookingObj.compound)
                  props.getParticipants(lookingObj.participants)
                  window.location.href = "#looking-modal"}}>Info</button>
                    </div>            
                </div>
            </div>
        )})}

        <div id='pagingMade'>
            <Paging paging={setPaging} page={page} forward={forward}/>     
      </div>
    </>
    );
  }

  export default Confirmed