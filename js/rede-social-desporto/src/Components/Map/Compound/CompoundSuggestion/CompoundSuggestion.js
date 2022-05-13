import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { compound } from '../../../../Model/Model';
import './CompoundSuggestion.css'

const CompoundSuggestion = () => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/compound', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Suggest Compound</h3>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Name:</label>
                        <input name="compoundName" type="text" {...register('name')} className="form-control" placeholder='Compound Name' required />
                    </div>
                    <div className="form-group col">
                        <label>Location:</label>
                        <input name="compoundLocation" type="text" {...register('location')} className="form-control" placeholder='Compound Location' required />
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
                <div className="form-group">
                    <button type="submit" id='submitGroup'>Submit</button>
                </div>
            </form>
        </div>

      );
    }

  export default CompoundSuggestion