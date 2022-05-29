import React from 'react';
import { sport } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import '../SearchPlayer.css'

const SelectSport = (props) => {

  function sportsId(value) {
    console.log(value.target.value)
    props.getSport(value.target.value)
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [sportArray, setSport] = React.useState([sport]);
  const {getAccessTokenSilently} = useAuth0();

    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
          };
          const req =  await fetch("http://localhost:8080/sports",options);
          const resp = await req.json();
          setSport(resp);
          
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (!isLoading) makeRequest();
    },[]);

    return (
    <>
        <label for='sport'>Sport</label>
        <select name="sport" id="selectSports" className='inputForm' onChange={sportsId} required>
            <option></option>
            {
                sportArray.map((sportObj,key)=>
                    <option key={key} value={sportObj.id}>{sportObj.name}</option>
                )
            }
        </select>
    </>
      
    );
  }

  export default SelectSport