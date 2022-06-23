import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { event } from "../../../Model/Model"
import { useAuth0 } from "@auth0/auth0-react";
import './UserEventForm.css'
import SelectCompound from '../../Looking/SearchPlayer/SelectCompound/SelectCompound';
import SelectSport from '../../Looking/SearchPlayer/SelectSport/SelectSport';
import Marker from '../../Map/MapComponent/Marker/Marker';
import SearchCompound from '../../Looking/SearchPlayer/SearchCompound/SearchCompound';
import MapEvent from '../MapEvent/MapEvent';

const UserEventForm = (props) => {

    const getCompound = (compound) => {
        setCompound(compound)
    }
    
    const getSport = (sport) => {
        setSport(sport)
    }

    const getCenter = (centerResp) => {
        setCenter(centerResp)
    }

    const getMarkers = (markers) => {
        setMarkers(markers)
    }

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const [compoundObj, setCompound] = React.useState("");
  const [sportObj, setSport] = React.useState("");
  const [center, setCenter] = React.useState("");
  const [markers, setMarkers] = React.useState([])
  // user state for form
  const [eventObj, setEvent] = useState(event);
  const {getAccessTokenSilently,user} = useAuth0();

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setEvent({ name: ''}), 1000);
  }, []);

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  async function submit(data) {

    data.sport = {id:parseInt(sportObj)}
    data.compound = {id:parseInt(compoundObj)}
    data.field = {id:5}
    const token = await getAccessTokenSilently();
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };
    const email = user.email.split("@")[0]
    const response = await fetch(`http://localhost:8080/event?email=${email}`, options)
    const resp = await response.json()
    props.created(resp)
    window.location.href = "#"
}

  return (
          <div id='userEventForm'>
              {eventObj &&
                  <form onSubmit={handleSubmit(submit)}>
                      <h3 id='titleEvent'>Create Event</h3>
                          <div className="eventInput">
                              <label className='labelEvent'>Name: </label>
                              <input maxLength={100} name="name" type="text" {...register('name')}  placeholder='Event Name' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Starting day</label>
                              <input name="startDate" type="text" {...register('startDate')}  placeholder='23/05/2019 11:00:00' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Ending day</label>
                              <input name="plannedfinishDate" type="text" {...register('plannedfinishDate')}  placeholder='23/05/2019 11:00:00' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Description</label>
                              <input name="description" type="text" {...register('description')}  placeholder='Description' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Summary</label>
                              <input maxLength={250} name="description" type="text" {...register('summary')}  placeholder='Summary' required></input>
                          </div>
                          <div className="eventInput">
                              <label className='labelEvent'>Number of participants</label>
                              <input name="limitParticipants" type='number' {...register('limitParticipants')}  placeholder='Limit Participants' required></input>
                          </div>
                          {/*Pass this to a component andd use a get to retrieve all the sports to include as options*/}
                          <br/>
                          <div className="eventInput">
                            <SelectSport getSport={getSport}></SelectSport>
                          </div>
                          {/*Pass this to a component andd use a get to retrieve all the fields to include as options*/}
                          <div className="eventInput">
                            <SelectCompound  getCompound={getCompound} marker={markers} sport={sportObj}></SelectCompound>
                          </div>

                  </form>
                  
              }
            <Marker/>
            <SearchCompound  center={getCenter} />
            <MapEvent center={center} sportId={sportObj} markers={getMarkers}/>
            <div className="form-row" id='submitEvent'>
                <button type="submit" id='submitEventBtn' onClick={handleSubmit(submit)}>Submit</button>
            </div>
          </div>
  );
}


  export default UserEventForm