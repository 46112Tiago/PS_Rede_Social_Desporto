import React from 'react';
import { useForm } from "react-hook-form";
import { api_url, sport } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import { filterSports } from '../../../../Functions/Functions';

const Sport_Compound = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [sportsArray, setSports] = React.useState([sport]);
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
            const token = await getAccessTokenSilently();
            var options = {
              method: 'GET',
              headers: {authorization: `Bearer ${token}`}
            };
            const req =  await fetch(`${api_url}/sports`,options);
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
    },[]);


  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  function submit(data) {
    const sports = data.sports.filter(filterSports)
    console.log(sports)
    props.getSports(sports)
  }

      return (
        <>  
        <h1>Sports:</h1>
        <form onSubmit={handleSubmit(submit)} id='formParticipant'>
            <fieldset>
                <legend>Choose the available sports:</legend>
                {
                    sportsArray.map((sportObj,i)=>
                    <div>
                        <div className='checkDiv' key={i}>
                            <label for={`check_${i}`} >{sportObj.name}</label>
                            <input type="checkbox"  className="checkboxCn" id={`check_1${i}`} name='sports' value={sportObj.id} {...register(`sports[${i}][id]`)}/>
                        </div>
                    </div>

                    )
                }
            </fieldset>
            <div id='participantbtn'>
                <input type={'submit'} id='addParticipant' value={'Save'}/>
            </div>
        </form>
        </>

      );
    }

  export default Sport_Compound