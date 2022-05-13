import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { field } from '../../../../Model/Model';
import './FieldSuggestion.css'

const FieldSuggestion = () => {

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

    fetch('http://localhost:8080/field', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Suggest Field</h3>
                <div className="form-row">
                    <div className="form-group col">
                        <input name="compoundName" type="text" {...register('compound.name')} className="form-control" placeholder='Compound Name' required />
                    </div>
                    <div className="form-group col">
                        <input name="fieldName" type="text" {...register('name')} className="form-control" placeholder='Field Name' required />
                    </div>
                    <div className="form-group col">
                        <h4>Parking lot</h4>
                        <input name="parking_y" type='radio' {...register('compound.parking')} className="form-control" value={true} />
                        <label for='parking_y'>Yes</label>
                        <input name="parking" type='radio' {...register('compound.parking')} className="form-control" value={false} />
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