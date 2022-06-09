import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { materials } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import { filterMaterials } from '../../../../Functions/Functions';

const Materials = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [materialsArray, setMaterials] = React.useState([materials]);
    const {getAccessTokenSilently} = useAuth0();
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
            const token = await getAccessTokenSilently();
            var options = {
              method: 'GET',
              headers: {authorization: `Bearer ${token}`}
            };
            const req =  await fetch("http://localhost:8080/material",options);
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
    const materials = data.materials.filter(filterMaterials)
    console.log(materials)
    props.getMaterials(materials)
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
                        <div className='checkDiv' key={i}>
                            <label for={`check_${i}`} >{materialObj.name}</label>
                            <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='materials' value={materialObj.id} {...register(`materials[${i+1}][id]`)}/>
                        </div>
                    </div>

                    )
                }
                <div className='checkDiv'>
                    <label for={`more`} > Others: </label>
                    <textarea  name='more'  {...register('materials[0][other]')} placeholder='Insert all the values separated by ;'/>
                </div>   
            </fieldset>
            <div id='participantbtn'>
                <input type={'submit'} id='addParticipant' value={'Save'}/>
            </div>
        </form>
        </>

      );
    }

  export default Materials