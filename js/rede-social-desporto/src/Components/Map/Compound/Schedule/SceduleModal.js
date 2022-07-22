import React from "react";
import  '../../Review/ReviewModal/ReviewModal.css'
import {api_url, schedule} from '../../../../Model/Model'

const ScheduleModal = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [scheduleArray, setSchedule] = React.useState([schedule]);
    const [optionDescription, setOptionalDescription] = React.useState("")

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

            const req =  await fetch(`${api_url}/schedule/compound/${window.localStorage.getItem("compound_id")}`,options);
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