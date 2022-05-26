import React from 'react';
import { compound } from '../../../../Model/Model';
import '../SearchPlayer.css'

const SelectCompound = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [compoundArray, setCompound] = React.useState([compound]);
    
      React.useEffect(() => {
        const makeRequest = async () => {
          setError(null);
          setIsLoading(true);
          try {
            const req =  await fetch("http://localhost:8080/compound");
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