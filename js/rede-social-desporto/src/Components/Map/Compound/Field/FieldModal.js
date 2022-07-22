import React from "react";
import  '../../Review/ReviewModal/ReviewModal.css'
import {api_url, field} from '../../../../Model/Model'

const FieldModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [fieldArray, setField] = React.useState([field]);

      // Keep the above values in sync, this will fire
      // every time the component rerenders, ie when
      // it first mounts, and then when any of the above
      // values change
      React.useEffect(() => {
        const makeRequest = async () => {
          setError(null);
          setIsLoading(true);
          try {

            const options = {
              method: "GET",
              mode: 'cors',
            };

            const req =  await fetch(`${api_url}/compound/${window.localStorage.getItem("compound_id")}/field`,options);
            const resp = await req.json();
            setField(resp);
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
        <div id="modalReview">
            <h2>Fields</h2>
            {fieldArray.map((feildObj,i) => 
                <h4 key={i}>{feildObj.name}</h4>
            )}
        </div>
      );
  }

  export default FieldModal