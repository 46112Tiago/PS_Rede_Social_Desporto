import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { materials } from '../../../../Model/Model';

const Materials = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [materialsArray, setMaterials] = React.useState([materials]);
    const [materialsObj, setMaterial] = React.useState(materials);

  
    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
            if(materialsArray[0].name) return 
            const req =  await fetch("http://localhost:8080/material");
            const resp = await req.json();
            setMaterials(resp);
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (!isLoading) makeRequest();
    },[]);


  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  function submit(data) {
    props.getMaterials(data)
    console.log(data)
  }

      return (
        <>  
        <h1>Materials:</h1>
        <form onSubmit={handleSubmit(submit)} id='formParticipant'>
            <fieldset>
                <legend>Choose the available materials:</legend>
                {
                    materialsArray.map((materialObj,i)=>
                    <div>
                        <div className='checkDiv'>
                            <label for={`check_1${i}`} >{materialsObj.name} Name</label>
                            <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='materials' value={1} {...register('id')}/>
                        </div>
                        <div className='checkDiv'>
                            <label for={`check_2${i}`} >{materialObj.name} Name </label>
                            <input type="checkbox"  className="checkboxCn" id={`check_2${i}`} name='materials' value={2} {...register('id')}/>
                        </div>    
                    </div>

                    )
                }
                <div className='checkDiv'>
                    <label for={`more`} > Others: </label>
                    <textarea  name='more'  {...register('extra')}/>
                </div>   
            </fieldset>
            <div id='participantbtn'>
                <input type={'submit'} id='addParticipant'/>
            </div>
        </form>
        </>

      );
    }

  export default Materials