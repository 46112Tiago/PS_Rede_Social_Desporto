import React from 'react';
import { useForm } from "react-hook-form";
import './AddParticipant.css'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../../Model/Model';

const AddParticipant = (props) => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently,user} = useAuth0();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [friendsArray, setFriends] = React.useState([]);
  const [newParticipants, setNewParticipants] = React.useState([]);
  
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
        const req =  await fetch(`${api_url}/user/group/${props.groupId}/participant?email=${email}`,options);
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
  },[props.groupId,newParticipants]);


  async function submit(data) {

    if(friendsArray.length == 0) return
    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Content-Type','application/json')
    myHeaders.append('Authorization',`Bearer ${token}`)

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data.friends)
    };

    const response = await fetch(`${api_url}/group/${props.groupId}/participant`, options)
    const resp = await response.json()
    setNewParticipants(resp)

}

      return (
        <>  
          <form onSubmit={handleSubmit(submit)} id='formParticipant'>
              <fieldset>
                  <legend>Add more participants:</legend>
                  {
                      friendsArray.map((friendObj,i)=>
                      <div key={i}>
                          <div className='checkDiv'>
                              <label for={`check_1${i}`} >{friendObj.firstName} {friendObj.lastName}</label>
                              <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='friends' value={friendObj.email.split("@")[0]} {...register('friends')}/>
                          </div> 
                      </div>

                      )
                  }
              </fieldset>
              <div id='participantbtn'>
                <input type={'submit'} id='addParticipant' />
              </div>
          </form>
        </>

      );
    }
  export default AddParticipant