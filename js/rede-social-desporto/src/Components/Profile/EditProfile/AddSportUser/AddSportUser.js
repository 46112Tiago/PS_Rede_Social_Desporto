import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { sport } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
export let sportArrayId = []

const AddSportUser = (props) => {

    const [sports, setSports] = React.useState([sport]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const {getAccessTokenSilently,user} = useAuth0()

     const myHeaders = new Headers()
     myHeaders.append('Content-Type','application/json')
   
     React.useEffect(() => {
       const makeRequest = async () => {
         setError(null);
         setIsLoading(true);
         try {
           const token = await getAccessTokenSilently()
           myHeaders.append('Authorization',`Bearer ${token}`)
           const options = {
               method: "GET",
               headers: myHeaders,
               mode: 'cors',
           };
           const email = user.email.split("@")[0]
           const req =  await fetch(`http://localhost:8080/user/not/sports?email=${email}`,options);
           const resp = await req.json();
           setSports(resp);
         } catch (err) {
           setError(err);
           //console.log(err);
         } finally {
           setIsLoading(false);
           
         }
       };
   
       if (!isLoading) makeRequest();
     },[props.deleted,props.edit]);

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

    const value = (checkbox) => {
        if(checkbox.target.checked){
            sportArrayId.push(checkbox.target.value)
        }else {
            const remove = sportArrayId.indexOf(checkbox.target.value)
            sportArrayId.splice(remove,1)
        }
        console.log(sportArrayId)

    }

      return (
        <>  
        <h1>Sports:</h1>
        <form onSubmit={handleSubmit()} id='formParticipant'>
            <fieldset id='editSportBody'>
                <legend>Choose the available sports:</legend>
                {
                    sports.map((sportObj,i)=>
                    <div key={i}>
                        <div className='checkDiv' key={i}>
                            <label key={i} for={`check_${i}`} >{sportObj.name}</label>
                            <input  type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='sports' value={sportObj.id} {...register(`sports[${i}][id]`)} onChange={value}/>
                        </div>
                    </div>

                    )
                } 
            </fieldset>
        </form>
        </>

      );
    }

  export default AddSportUser