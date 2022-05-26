import React from 'react';
import './SearchPlayer.css'
import { useForm } from "react-hook-form";
import SelectSport from './SelectSport/SelectSport';
import SelectCompound from './SelectCompound/SelectCompound';
import MapLooking from './MapLooking/MapLooking';

const SearchPlayer = () => {

    const { register, handleSubmit } = useForm();

    return (
    <>
        <div id='searchBody'>
            <div id='leftLooking'>
                <div id='leftForm'>
                    <form id='lookingForm' onSubmit={handleSubmit}>
                        <fieldset id='lookingFormContainer'>
                            <legend>Request Player:</legend>
                            <label>Starting Hour</label>
                            <input className='inputForm' type='time' name="startHour"  {...register(`startHour`)}/>
                            <SelectSport></SelectSport>
                            <SelectCompound></SelectCompound>
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