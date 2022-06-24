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
      const [lookingMadeArray, setLooking] = React.useState([lookingPlayers]);
      const [lookingInfo, setLookingInfo] = React.useState(lookingPlayers);
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
              const req =  await fetch(`http://localhost:8080/lookingPlayers/accept?page=${page}&email=${email}`,options);
              const resp = await req.json();
              if(resp.length < limit){
                setForward(false)
              }else{
                setForward(true)
              }
              if(resp.length == 0)  
                setPage(page-1) 
              else{ 
                setLooking(resp)
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
            {  /*  
                  Copyright (c) 2022 - Tiago Alves - https://codepen.io/jorgesanes10/pen/QdMEXr

                  Permission is hereby granted, free of charge, to any person 
                  obtaining a copy of this software and associated documentation 
                  files (the "Software"), to deal in the Software without restriction,
                  including without limitation the rights to use, copy, modify, 
                  merge, publish, distribute, sublicense, and/or sell copies of 
                  the Software, and to permit persons to whom the Software is 
                  furnished to do so, subject to the following conditions:

                  The above copyright notice and this permission notice shall 
                  be included in all copies or substantial portions of the Software.

                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
                  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
                  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
                  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
                  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
                  DEALINGS IN THE SOFTWARE.

                */
            }
            
            {lookingMadeArray.map((lookingObj,key)=>{
              if(lookingObj.id != 0){
                return(
                    <div className='cardContainer' key={key}>
                        <div className="card accept">
                        <p>{lookingObj.creator.firstName} {lookingObj.creator.lastName}</p>
                            <img src={require('../../img/default_profile.jpg')}></img>
                            <div className='btnContainer'>
                              <button className='infoLooking'onClick={()=>{
                                  props.getLookingPlayers(lookingObj)
                                  props.getCompound(lookingObj.compound)
                                  props.getParticipants(lookingObj.participants)
                                  window.location.href = "#looking-modal"}}>Info</button>
                              <AcceptBtn lookingId={lookingInfo.id} userId={lookingObj.userId}/>      
                            </div>            
                        </div>
                    </div>)
            }})}

        <div id='pagingMade'>
            <Paging paging={setPaging} page={page} forward={forward}/>     
        </div>
    </>
      
    );
  }

  export default Accept