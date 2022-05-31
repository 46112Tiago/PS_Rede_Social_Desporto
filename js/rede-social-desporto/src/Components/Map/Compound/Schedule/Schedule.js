import React from 'react';
import { useForm } from "react-hook-form";
import { filterSchedule } from '../../../../Functions/Functions';
import { schedule } from '../../../../Model/Model';
import './Schedule.css'

const Schedule = (props) => {

  const week = ['2ª','3ª','4ª','5ª','6ª','Sat','Sun']
  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {
    const schedule = data.schedules.filter(filterSchedule)
    props.getSchedule(schedule)
    console.log(data)
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
                            <label {...register(`schedules[${key}][weekday]`, {value : weekDay})}>{weekDay}</label>
                            <input type='time' name="schedules[][openingHour]" step={1}  {...register(`schedules[${key}][openingHour]`)}/>
                            <label>to</label>
                            <input type='time' name={`schedules[][closingHour]`} step={1} {...register(`schedules[${key}][closingHour]`)}/>
                          </div>
                        )
                      }
                    <div className='weekDaysBody'>
                        <label for={`optionalDescription`} > Others: </label>
                        <textarea  name='optionalDescription'  {...register('schedules[7][optionalDescription]')} placeholder='More informations: Holidays ... '/>
                    </div>   
            </fieldset>
            <div id='participantbtn'>
                <input type={'submit'} id='addParticipant' value={'Save'}/>
            </div>
        </form>
        </>

      );
    }

  export default Schedule