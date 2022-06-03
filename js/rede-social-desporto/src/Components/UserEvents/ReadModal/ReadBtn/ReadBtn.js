import React from "react";
import '../ReadModal.css'
import { useAuth0 } from "@auth0/auth0-react";
import { convertCoordinateToLocation } from "../../../../GoogleMaps/Geocoding";

const ReadBtn = (props) => {

const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
const {getAccessTokenSilently} = useAuth0();

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
        const req =  await fetch(`http://localhost:8080/event/${props.eventId}`,options);
        const resp = await req.json();
        const lat = resp.compound.location ? resp.compound.location.x : 0
        const lng = resp.compound.location ? resp.compound.location.y : 0
        const location = await convertCoordinateToLocation(lat,lng)
        props.getLocation(location)
        props.getInfo(resp)
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        
      }
    };

      return (
        <>
            <a onClick={()=>{makeRequest() 
                window.location.href="#user-event"  }}>Read me</a>
        </>

      );
    }

  export default ReadBtn