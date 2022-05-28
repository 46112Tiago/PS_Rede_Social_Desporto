import React from 'react';
import { compound } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import '../SearchPlayer.css'

const SelectCompound = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [compoundArray, setCompound] = React.useState([compound]);
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
            const req =  await fetch(`http://localhost:8080/compound/location?zoom=0`,options);
            const resp = await req.json();
            setCompound(resp);
            
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
        <label for='compound'>Compound/Field</label>
        <select name="compound" id="selectCompound" className='inputForm'>
            {
                compoundArray.map((compoundObj,key)=>
                    <option key={key} value={`${compoundObj.id}`}>{compoundObj.name}</option>
                )
            }
        </select>
    </>
      
    );
  }

  export default SelectCompound