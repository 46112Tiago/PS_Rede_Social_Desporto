import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { user } from "../../../../Model/Model";
import './AddParticipant.css'

const AddParticipant = () => {


    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [friendsArray, setFriends] = React.useState([user]);
    const [friendsObj, setFriend] = React.useState(user);

  
    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const req =  await fetch("http://localhost:8080/user/1/friends");
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
    },[]);


  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    console.log(JSON.stringify(data))

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/group/1/participant', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <>  
            <div id="participant-modal" className="modal_participant">
                <div className="modal__content_participant">
                    <a href="#" className="modal__close">&times;</a>
                    <h1>Friends:</h1>
                    <form onSubmit={handleSubmit(submit)} id='formParticipant'>
                        <fieldset>
                            <legend>Add more participants:</legend>
                            {
                                friendsArray.map((friendObj,i)=>
                                <div>
                                    <div className='checkDiv'>
                                        <label for={`check_1${i}`} >{friendObj.firstname} {friendObj.lastname} Name Surname</label>
                                        <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='friends' value={1} {...register('friends')}/>
                                    </div>
                                    <div className='checkDiv'>
                                        <label for={`check_2${i}`} >{friendObj.firstname} {friendObj.lastname} Name Surname</label>
                                        <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='friends' value={2} {...register('friends')}/>
                                    </div>    
                                </div>
 
                                )
                            }
                        </fieldset>
                        <div id='participantbtn'>
                          <input type={'submit'} id='addParticipant'/>
                        </div>
                    </form>
                </div>
            </div>
        </>

      );
    }
  export default AddParticipant