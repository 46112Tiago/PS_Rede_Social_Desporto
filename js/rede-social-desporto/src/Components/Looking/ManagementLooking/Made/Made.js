import React from 'react';
import './Made.css'
import { useAuth0 } from "@auth0/auth0-react";
import { lookingPlayers } from '../../../../Model/Model';

const Made = () => {

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
            const req =  await fetch(`http://localhost:8080/lookingPlayers/creator/${window.name}`,options);
            const resp = await req.json();
            setLooking(resp)
          } catch (err) {
            setError(err);
            //console.log(err);
          } finally {
            setIsLoading(false);
            
          }
        };
    
        if (!isLoading) makeRequest();
      },[lookingMadeArray]);


    return (
    <>
        {lookingMadeArray.map((made,key)=> {
            <div className='cardContainer' key={key}>
                <div className="card made">
                    <p>Name Surname</p>
                    <img src={require('../../img/default_profile.jpg')} className='photoLooking'></img>
                    <div className='btnContainer'>
                        <button className='Looking' onClick={()=>{window.location.href = "#looking-modal"}}>Info</button>
                        <button className='cancelLooking'>Cancel</button>
                    </div>            
                </div>
            </div>
        })}
    </>
      
    );
  }

  export default Made