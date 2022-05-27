import React from 'react'
import { compound } from '../../../Model/Model';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./MapComponent.css";
import Marker from './Marker/Marker';

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
    myHeaders.append('authorization','Bearer');

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
         const marker = new window.google.maps.Marker({
              position: point,
              map,
              title: element.name,
          });
          marker.id = element.id
          marker.addListener("click", () => {
            //localStorage = element.id
            alert(element.id)
            window.location.href = "#marker-modal"
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
            <Marker/>
            <div ref={ref} id="mapComponent"> 

            </div>
        </>
    );

}

export default MapComponent