import React from "react";
import  '../Review/ReviewModal/ReviewModal.css'
import { compound } from "../../../Model/Model";

const CompoundMarkerModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [compoundInfo, setCompound] = React.useState(compound);

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

            const req =  await fetch(`http://localhost:8080/compound/${window.localStorage.getItem("compound_id")}`,options);
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
        <div id="modalReview">
            <h2>Compound</h2>
            <h5>Name: {compoundInfo.name}</h5>
            <h5>Summary: {compoundInfo.summary}</h5>
            <h5>Parking: {compoundInfo.parking?'Yes':'No'}</h5>
        </div>
      );
  }

  export default CompoundMarkerModal