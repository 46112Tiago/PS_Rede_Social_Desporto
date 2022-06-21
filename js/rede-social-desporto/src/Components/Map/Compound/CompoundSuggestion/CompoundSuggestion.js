import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CompoundSuggestion.css'

const CompoundSuggestion = (props) => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  let loc;
  let infoWindow;

  React.useEffect(() => {

    },[]);

    function submit(data) {
        data.location=loc
        props.getCompound(data)
        console.log(data)
    }

    function pickLocation() {
        window.location.href = "#";
        loc = null
        // Configure the click listener.
        if(props.map) {
            if(infoWindow != null) infoWindow.close(props.map);
            props.map.addListener("click", (mapsMouseEvent) => {
            if(!loc){    
                // Close the current InfoWindow.

                // Create a new InfoWindow.
                infoWindow = new window.google.maps.InfoWindow({
                position: mapsMouseEvent.latLng,
                });
                infoWindow.setContent(
                JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
                );
                loc = JSON.stringify(mapsMouseEvent.latLng.toJSON());
                if(loc) window.location.href = "#demo-modal";
            }});
        } 

    }

      return (
        <div>
                <h3>Suggest Compound</h3>
                <form onSubmit={handleSubmit(submit)} id='formParticipant'>
                <div  id='formConatinerCompound'>
                    <div >
                        <label>Name:</label>
                        <input name="compoundName" type="text" {...register('name')} className="form-control" placeholder='Compound Name' required />
                    </div>
                    <div >
                        <label>Contact:</label>
                        <input name="compoundContact" type={'text'} {...register('contact')} className="form-control" placeholder='Compound Contact' required />
                    </div>
                    <div className="form-group col">
                        <label>Location:</label>
                        <input type={'button'} className="form-control" name="compoundLocation" value="pick location" onClick={pickLocation}/>
                    </div>
                    <div className="form-group col">
                        <label>Description:</label>
                        <textarea maxlength="250" id='textareaDescription' {...register('description')} placeholder='Write a description...'/>
                    </div>
                    <div className="form-group col">
                        <label>Summary</label>
                        <textarea maxlength="100" id='textareaSummary' {...register('summary')} placeholder='Write a summary...'/>
                    </div>
                    <div className="form-group col">
                        <h4>Parking lot</h4>
                        <input name="parking_y" type='radio' {...register('parking')} className="form-control" value={true} checked />
                        <label for='parking_y'>Yes</label>
                        <input name="parking" type='radio' {...register('parking')} className="form-control" value={false} />
                        <label for='parking_n'>No</label>
                    </div>
                    <div className="form-group col">
                        <h4>Dressing Room</h4>
                        <label for='dressingRoom_b'>Both</label>
                        <input name="dressingRoom" type='radio' {...register('dressingRoom')} className="form-control" value={'B'} checked/>
                        <label for='dressingRoom_m'>Mixed</label>
                        <input name="dressingRoom" type='radio' {...register('dressingRoom')} className="form-control" value={'M'} />
                        <label for='dressingRoom_n'>None</label>
                        <input name="dressingRoom" type='radio' {...register('dressingRoom')} className="form-control" value={'N'} />
                    </div>
                </div>
                <div id='participantbtn'>
                    <input type={'submit'} id='addParticipant' value={'Save'}/>
                </div>
            </form>
        </div>
      );
    }

  export default CompoundSuggestion