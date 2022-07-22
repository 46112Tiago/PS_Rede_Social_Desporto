import React from 'react';
import './SearchPlayer.css'
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import SelectSport from './SelectSport/SelectSport';
import SelectCompound from './SelectCompound/SelectCompound';
import MapLooking from './MapLooking/MapLooking';
import SearchCompound from './SearchCompound/SearchCompound';
import Marker from '../../Map/MapComponent/Marker/Marker';
import { api_url } from '../../../Model/Model';

const SearchPlayer = () => {

    const getCompound = (compound) => {
        setCompound(compound)
    }

    const getMarkers = (markers) => {
        setMarkers(markers)
    }
    
    const getSport = (sport) => {
        setSport(sport)
    }

    const getCenter = (centerResp) => {
        setCenter(centerResp)
    }

    const { register, handleSubmit } = useForm();
    const [compoundObj, setCompound] = React.useState("");
    const [sportObj, setSport] = React.useState("");
    const [center, setCenter] = React.useState("");
    const [markers, setMarkers] = React.useState([])
    const myHeaders = new Headers()
    myHeaders.append('Content-Type','application/json')
    const {getAccessTokenSilently,user} = useAuth0();

    async function submit(data) {
        
        data.sports = {id:parseInt(sportObj)}
        data.compound = {id:parseInt(compoundObj)}
        const token = await getAccessTokenSilently();
        myHeaders.append('Authorization',`Bearer ${token}`)

        const options = {
            method: "POST",
            headers: myHeaders,
            mode: 'cors',
            body:JSON.stringify(data)
        };
        const email = user.email.split("@")[0]
        const response = fetch(`${api_url}/lookingPlayers?email=${email}`, options)
  }

    return (
    <>
        <div id='searchBody'>
            <div id='leftLooking'>
                <div id='leftForm'>
                    <form id='lookingForm' onSubmit={handleSubmit(submit)}>
                        <fieldset id='lookingFormContainer'>
                            <legend>Request Player:</legend>
                            <label>Starting Hour</label>
                            <input className='inputForm' type='datetime-loca' name="startDateTime" placeholder='2018-06-12T19:30'  {...register(`startDateTime`)} required/>
                            <SelectSport getSport={getSport}></SelectSport>
                            <label for='compound'>Compound/Field:</label>
                            <SelectCompound getCompound={getCompound} marker={markers} sport={sportObj}></SelectCompound>
                            <input type='submit' id='btnLooking' value={'Send'}></input>
                        </fieldset>
                    </form>
                </div>

            </div>
            <div id='rightLooking'>
                <Marker/>
                <SearchCompound center={getCenter} sportId={sportObj}></SearchCompound>
                <MapLooking center={center} sportId={sportObj} markers={getMarkers}></MapLooking>
            </div>
        </div>
    </>
      
    );
  }

  export default SearchPlayer