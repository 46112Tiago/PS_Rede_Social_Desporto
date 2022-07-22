import React from "react";
import  '../../Review/ReviewModal/ReviewModal.css'
import {api_url, materials,} from '../../../../Model/Model'

const MaterialModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [materialArray, setMaterial] = React.useState([materials]);
    
    
    React.useEffect(() => {
        const makeRequest = async () => {
          setError(null);
          setIsLoading(true);
          try {

            const options = {
              method: "GET",
              mode: 'cors',
            };

            const req =  await fetch(`${api_url}/material/compound/${window.localStorage.getItem("compound_id")}`,options);
            const resp = await req.json();
            setMaterial(resp);
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
            <h2>Materials</h2>
            <ul>
            {materialArray.map((materialObj,i) => 
                <li key={i}>{materialObj.name}</li>
            )}
            </ul>
        </div>
      );
  }

  export default MaterialModal