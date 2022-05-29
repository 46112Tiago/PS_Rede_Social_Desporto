import React from 'react';
import './SearchPlayer.css'
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import SelectSport from './SelectSport/SelectSport';
import SelectCompound from './SelectCompound/SelectCompound';
import MapLooking from './MapLooking/MapLooking';

const SearchPlayer = () => {

    const getCompound = (compound) => {
        setCompound(compound)
    }
    
    const getSport = (sport) => {
        setSport(sport)
    }

    const { register, handleSubmit } = useForm();
    const [compoundObj, setCompound] = React.useState("");
    const [sportObj, setSport] = React.useState("");

    const myHeaders = new Headers()
    myHeaders.append('Content-Type','application/json')
    const {getAccessTokenSilently} = useAuth0();

    async function submit(data) {
        
        data.sports = {id:parseInt(sportObj)}
        data.compound = {id:parseInt(compoundObj)}
        data.creator = {userId:parseInt(window.name)}
        const token = await getAccessTokenSilently();
        myHeaders.append('Authorization',`Bearer ${token}`)

        const options = {
            method: "POST",
            headers: myHeaders,
            mode: 'cors',
            body:JSON.stringify(data)
        };
  
        const response = fetch(`http://localhost:8080/lookingPlayers`, options)
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
                            <SelectCompound getCompound={getCompound}></SelectCompound>
                            <input type='submit' id='btnLooking'></input>
                        </fieldset>
                    </form>
                </div>

            </div>
            <div id='rightLooking'>
                <MapLooking></MapLooking>
            </div>
        </div>
    </>
      
    );
  }

  export default SearchPlayer