import React from 'react';
import { compound } from '../../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import '../SearchPlayer.css'

const SelectCompound = (props) => {

  function compoundId(value) {
    props.getCompound(value.target.value)
  }


    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [compoundArray, setCompound] = React.useState([compound]);
    const [sport, setSport] = React.useState(0)
    const {getAccessTokenSilently} = useAuth0();

      React.useEffect(() => {

        if(!props.sport) {
          document.getElementById('selectCompound').disabled = true
          setSport(0)
        }else {
          document.getElementById('selectCompound').disabled = false
          setSport(props.sport)
        }
      
        const makeRequest = async () => {
          if(!props.sport) return
          setError(null);
          setIsLoading(true);
          try {
            
            props.sport != sport ? setCompound([]) : setCompound(props.marker);
            
          } catch (err) {
            setError(err);
            //console.log(err);
          } finally {
            setIsLoading(false);
          }
        };
    
        if (!isLoading) makeRequest();
      },[props.sport,props.marker]);

    return (
    <>
        <select name="compound" id="selectCompound" className='inputForm' onChange={compoundId} required>
          <option></option>
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