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
        
      
      const markers = () => {
        
        
            const makeRequest = async () => {
              setError(null);
              setIsLoading(true);
              try {
                const req =  await fetch("http://localhost:8080/compound/location");
                const resp = await req.json();
                setLocations(resp);
                
              } catch (err) {
                setError(err);
                //console.log(err);
              } finally {
                setIsLoading(false);
                
              }
            };
        
            if (!isLoading) makeRequest();    
      
          return locationArray;
      }

      locationArray.forEach(element => {
        new window.google.maps.Marker({
            position: element.location,
            map,
            title: "Marker",
        });
      });  
    })
    return (
        <>
            <div ref={ref} id="mapComponent"> 
            {React.Children.map(props.Children, (child) => {
                if (React.isValidElement(child)) {
                // set the map prop on the child component
                return React.cloneElement(child, { Marker });
                }
            })}
            </div>
        </>
    );

}

export default MapComponent