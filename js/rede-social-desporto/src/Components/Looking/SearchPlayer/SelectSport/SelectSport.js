import React from 'react';
import { sport } from '../../../../Model/Model';
import '../SearchPlayer.css'

const SelectSport = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [sportArray, setSport] = React.useState([sport]);
    
      React.useEffect(() => {
        const makeRequest = async () => {
          setError(null);
          setIsLoading(true);
          try {
            const req =  await fetch("http://localhost:8080/sports");
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
        <select name="sport" id="selectSports" className='inputForm'>
            {
                sportArray.map((sportObj,key)=>
                    <option key={key} value={`${sportObj.id}`}>{sportObj.name}</option>
                )
            }
        </select>
    </>
      
    );
  }

  export default SelectSport