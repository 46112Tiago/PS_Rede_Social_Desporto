import React from 'react'
import { compound } from '../../../Model/Model';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./MapComponent.css";
import Marker from '../Marker/Marker';


const MapComponent = (props) => { 
 

    const ref = React.useRef();
    const mapOptions = {
        zoom : props.zoom,
        center : props.center
    }
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [locationArray, setLocations] = React.useState([compound]);
    React.useEffect(() => {
      const map = new window.google.maps.Map(document.getElementById("mapComponent"), mapOptions);
        
    setIsLoading(true);
    
    
    const myHeaders = new Headers();
    myHeaders.append('authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJLb3pWaFZPYmVSbzg3dHRkSU0xdSJ9.eyJpc3MiOiJodHRwczovL2Rldi03eHNpcjNhaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiUEt3R0k2emlaOTNhbnE5YzEzejBwYWV0MG5VYXhxV3VAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTY1MzM1NTc2OCwiZXhwIjoxNjUzNDQyMTY4LCJhenAiOiJQS3dHSTZ6aVo5M2FucTljMTN6MHBhZXQwblVheHFXdSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.eSxs9rMm1X2QJOyZym_iIPHM05Uz-eL7IYmZus3GzFKMagqiXt6-3j-NmaK6CGv5s8AVyIQDopRceFYq-y27lAg_PzZxMTKjtiiq3oBsvT2OxNVxNLnySEmd0F-CqdlDqwFy0M4hrge350LaXeG-pCU6HspgR2_6TRtynL8UOC4qGB1nHR9z8IQ_NrM9DQD23h2NPVFscsbrpU-Qjp5rMWjQlPyV2Zebbe0RrwxhTrnXe_JgNfMq-rX6SJeSufXlOi3blE-LuCshP-6_ItYPhU1oEwKPRVwCOVgfM9-JOZT-PQBjHM6ztB-3Z_xAWi_dlAoKvIZcVoHNmveKJafX3Q');

    const options = {
        method: "GET",
        headers: myHeaders,
        mode: 'cors',
    };

    var a;
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/compound/location",options);
        const resp = await req.json();
        setLocations(resp);
        resp.forEach(element => {
          const point = { lat : element.location.x, lng : element.location.y};
          new window.google.maps.Marker({
              position: point,
              map,
              title: element.name,
          });
        });
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (!isLoading) {
      makeRequest();    
      
    }

       
    },[]);
    return (
        <>
            <div ref={ref} id="mapComponent"> 
            
            </div>
        </>
    );

}

export default MapComponent