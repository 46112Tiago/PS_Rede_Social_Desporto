import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { schedule } from '../../../../Model/Model';
import './Schedule.css'

const Schedule = () => {

  const week = ['2ª','3ª','4ª','5ª','6ª','Sat','Sun']
  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();


  function  buildBody(data)  {
    var input = document.getElementsByName("schedules[]");
    
    for (var i = 0; i < input.length; i++) {
      
    }

  }



  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    buildBody(data)

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/compound/1/schedule', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <>  
        <h1>Schedule:</h1>
        <form onSubmit={handleSubmit(submit)} id='formParticipant'>
            <fieldset id='scheduleBody'>
                <legend>Define the schedule:</legend>
                      {
                        week.map((weekDay,key) => 
                          <div className='weekDaysBody'>
                            <label {...register(`weekday`, {value : weekDay})}>{weekDay}</label>
                            <input type='time' name="schedules[][openingHour]"  {...register(`openingHour`)}/>
                            <label>to</label>
                            <input type='time' name={`schedules[][closingHour]`} {...register(`closingHour`)}/>
                          </div>
                        )
                      }
                    <div className='weekDaysBody'>
                        <label for={`optionalDescription`} > Others: </label>
                        <textarea  name='optionalDescription'  {...register('optionalDescription')} placeholder='More informations: Holidays ... '/>
                    </div>   
            </fieldset>
            <div id='participantbtn'>
                <input type={'submit'} id='addParticipant'/>
            </div>
        </form>
        </>

      );
    }

  export default Schedule