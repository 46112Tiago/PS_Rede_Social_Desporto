import React from "react";
import  '../../Review/ReviewModal/ReviewModal.css'
import {materials,} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";

const MaterialModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [materialArray, setMaterial] = React.useState([materials]);
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
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)

            const options = {
              method: "GET",
              headers: myHeaders,
              mode: 'cors',
            };

            const req =  await fetch(`http://localhost:8080/material/compound/${window.localStorage.getItem("compound_id")}`,options);
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