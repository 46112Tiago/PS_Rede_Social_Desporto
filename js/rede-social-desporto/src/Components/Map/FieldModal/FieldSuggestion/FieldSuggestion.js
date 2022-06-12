import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import './FieldSuggestion.css'
import {convertLocationToCoordinate} from '../../../../GoogleMaps/Geocoding'

const FieldSuggestion = (props) => {

    let loc;
    let infoWindow;


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
                infoWindow.open(props.map);
                if(loc) window.location.href = "#field-modal";
            }});
        } 

    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit } = useForm();
    const myHeaders = new Headers()
    myHeaders.append('Content-Type','application/json')
    const {getAccessTokenSilently} = useAuth0();

    async function submit(data) {

        const token = await getAccessTokenSilently();
        myHeaders.append('Authorization',`Bearer ${token}`)
        data.compound.location = {x:JSON.parse(loc).lat, y:JSON.parse(loc).lng}
        const options = {
            method: "POST",
            headers: myHeaders,
            mode: 'cors',
            body:JSON.stringify(data)
        };
        const response = await fetch('http://localhost:8080/field', options)
    }

      return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Suggest Field</h3>
                <div className="form-row">
                    <div className="form-group col">
                        <labe>Field Name</labe>
                        <input name="fieldName" type="text" {...register('name')} className="form-control" placeholder='Field Name' required />
                    </div>
                    <div className="form-group col">
                        <label>Location:</label>
                        <input type={'button'} className="form-control" name="compoundLocation" value="pick location" onClick={pickLocation}/>
                    </div>
                    <div className="form-group col">
                        <h4>Parking lot</h4>
                        <input name="parking_y" type='radio' {...register('compound.parking')} className="form-control" value={true} />
                        <label for='parking_y'>Yes</label>
                        <input name="parking" type='radio' {...register('compound.parking')} className="form-control" value={false} defaultChecked/>
                        <label for='parking_n'>No</label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" id='submitGroup'>Submit</button>
                </div>
            </form>
        </div>

      );
    }

  export default FieldSuggestion