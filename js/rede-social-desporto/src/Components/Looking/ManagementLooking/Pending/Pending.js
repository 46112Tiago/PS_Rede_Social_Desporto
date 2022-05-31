import React from 'react';
import './Pending.css'
import { useAuth0 } from "@auth0/auth0-react";
import { lookingPlayers } from '../../../../Model/Model';
import Paging from '../../../Paging/Paging';


const Pending = (props) => {

    const setPaging = (offset) => {
        setPage(offset)
      }
    
      const [page, setPage] = React.useState(0);
      const [forward, setForward] = React.useState(true);
      const [isLoading, setIsLoading] = React.useState(false);
      const [error, setError] = React.useState();
      const [lookingMadeArray, setLooking] = React.useState([lookingPlayers]);
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
              const req =  await fetch(`http://localhost:8080/lookingPlayers/${window.name}?state=pending&page=${page}`,options);
              const resp = await req.json();
              setLooking(resp)
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
        },[lookingMadeArray,page]);

    return (
    <>
        {lookingMadeArray.map((lookingObj,key)=>{
            return(
            <div className='cardContainer' key={key}>
                <div className="card pending">
                    <p>{lookingObj.creator.firstName} {lookingObj.creator.lastName}</p>
                    <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                    <div>
                    <button id="activateModal_pending" className='infoLooking'onClick={()=>{
                    props.getLookingPlayers(lookingObj)
                    props.getCompound(lookingObj.compound)
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

  export default Pending