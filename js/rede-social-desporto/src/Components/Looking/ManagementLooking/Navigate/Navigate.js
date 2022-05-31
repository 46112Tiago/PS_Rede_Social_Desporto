import React from 'react';
import './Navigate.css'
import { useAuth0 } from "@auth0/auth0-react";
import { lookingPlayers } from '../../../../Model/Model';
import Paging from '../../../Paging/Paging';
import Participate from './Participate/Participate';

const Navigate = (props) => {

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
              const req =  await fetch(`http://localhost:8080/lookingPlayers/navigate/${window.name}?page=${page}`,options);
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
        {lookingMadeArray.map((lookingMadeObj,key)=>{
            return(
                <div className='cardContainer' key={key}>
                    <div className="card navigate">
                        <p>{lookingMadeObj.creator.firstName} {lookingMadeObj.creator.lastName}</p>
                        <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                        <div className='btnContainer'>
                            <button className='Looking activateModal_pending' onClick={()=>{
                                props.getLookingPlayers(lookingMadeObj)
                                props.getCompound(lookingMadeObj.compound)
                                window.location.href = "#looking-modal"}}>Info</button>
                            <Participate lookingId={lookingMadeObj.id}/>
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

  export default Navigate