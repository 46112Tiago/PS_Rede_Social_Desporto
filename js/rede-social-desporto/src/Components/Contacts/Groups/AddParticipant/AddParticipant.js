import React from 'react';
import { useForm } from "react-hook-form";
import './AddParticipant.css'
import { useAuth0 } from "@auth0/auth0-react";

const AddParticipant = (props) => {

  const friendsArray = props.friendsArray ? props.friendsArray : [] 

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently} = useAuth0();

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

    const response = await fetch(`http://localhost:8080/group/${props.groupId}/participant`, options)

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
                              <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='friends' value={friendObj.userId} {...register('friends')}/>
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