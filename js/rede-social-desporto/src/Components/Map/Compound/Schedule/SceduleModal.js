import React from "react";
import  '../../Review/ReviewModal/ReviewModal.css'
import {schedule} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";

const ScheduleModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [scheduleArray, setSchedule] = React.useState([schedule]);
    const [optionDescription, setOptionalDescription] = React.useState("")
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

            const req =  await fetch(`http://localhost:8080/schedule/compound/${window.localStorage.getItem("compound_id")}`,options);
            const resp = await req.json();
            setSchedule(resp);
            if(resp[0].optionDescription)
                setOptionalDescription(resp[0].optionDescription)
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
            <h2>Schedule</h2>
            {scheduleArray.map((scheduleObj,i) => {
                return(
                    <>
                        <h5 key={i}>{scheduleObj.weekday}</h5>
                        <p key={i}>{scheduleObj.openingHour} to {scheduleObj.closingHour}</p>
                    </>
                )
            }
            )}
            <p>{optionDescription}</p>
        </div>
      );
  }

  export default ScheduleModal