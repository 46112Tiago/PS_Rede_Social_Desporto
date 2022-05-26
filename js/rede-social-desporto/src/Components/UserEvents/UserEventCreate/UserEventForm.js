import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { event } from "../../../Model/Model"
import './UserEventForm.css'

const UserEventForm = () => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [eventObj, setEvent] = useState(event);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setEvent({ name: ''}), 1000);
  }, []);

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/event', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

  return (
          <div id='userEventForm'>
              {eventObj &&
                  <form onSubmit={handleSubmit(submit)}>
                      <h3 id='titleEvent'>Create Event</h3>
                          <div className="eventInput">
                              <label className='labelEvent'>Name: </label>
                              <input name="name" type="text" {...register('name')}  placeholder='Event Name' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Starting day</label>
                              <input name="startDate" type="text" {...register('startDate')}  placeholder='Start Date' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Ending day</label>
                              <input name="plannedfinishDate" type="text" {...register('plannedfinishDate')}  placeholder='End Date' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Description</label>
                              <input name="description" type="text" {...register('description')}  placeholder='Description' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Number of participants</label>
                              <input name="limitParticipants" type='number' {...register('limitParticipants')}  placeholder='Limit Participants' required></input>
                          </div>
                          {/*Pass this to a component andd use a get to retrieve all the fields to include as options*/}
                          <div className="eventInput">
                              <label className='labelEvent'>Location</label>
                            <input list='field' name="field" type="text" {...register('field')}/>
                              <datalist id='field' required>
                                <option value={'Lisbon'}></option>
                              </datalist>
                          </div>
                          {/*Pass this to a component andd use a get to retrieve all the sports to include as options*/}
                          <div className="eventInput">
                              <label className='labelEvent'>Sport</label>
                            <input list='sports' name="sport" type="text" {...register('sport')}/>
                              <datalist id='sports'  required>
                                <option value={'Tenis'}></option>
                              </datalist>
                          </div>
                      <div className="form-row" id='submitEvent'>
                          <button type="submit" id='submitEventBtn'>Submit</button>
                      </div>
                  </form>
              }
          </div>
  );
}


  export default UserEventForm