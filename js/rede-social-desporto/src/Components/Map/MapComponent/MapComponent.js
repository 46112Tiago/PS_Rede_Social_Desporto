import React from 'react'
import { compound } from '../../../Model/Model';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./MapComponent.css";
import Marker from './Marker/Marker';

const MapComponent = (props) => { 
 

    const ref = React.useRef();
  
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [markersArray, setMarkers] = React.useState([]);
    const [zoomEffect,setZoom] = React.useState(props.zoom);
    const [centerVal, setCenter] = React.useState(props.center);

    React.useEffect(() => {
      
      
      
      const mapOptions = {
        zoom : zoomEffect,
        center : centerVal,
        minZoom : 3,
        maxZoom : 15,
        mapTypeId:google.maps.MapTypeId.SATELLITE
      }
      let map = new window.google.maps.Map(document.getElementById("mapComponent"),mapOptions);
      markersArray.forEach(element => {
        const point = { lat : element.location.x, lng : element.location.y};
        const marker = new window.google.maps.Marker({
            position: point,
            map,
            title: element.name,
        });
        marker.id = element.id
        marker.addListener("click", () => {
          window.localStorage.setItem("compound_id",JSON.stringify(element.id))
          alert(element.id)
          window.location.href = "#marker-modal"
        });
      })
      setIsLoading(true);

      const options = {
          method: "GET",
          mode: 'cors',
      };

    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        map.addListener('zoom_changed', async function() {
          var zoom = map.getZoom();
          setZoom(zoom);
          const req =  await fetch(`http://localhost:8080/compound/location?zoom=${zoom}&centerLat=${centerVal.lat}&centerLng=${centerVal.lng}`,options);
          const resp = await req.json();
          setMarkers(resp)
      });
        map.addListener('center_changed', async function() {
          var center = map.getCenter().toJSON();
          setCenter(
            center
          );
          console.log(center);
          const req =  await fetch(`http://localhost:8080/compound/location?zoom=${zoomEffect}&centerLat=${center.lat}&centerLng=${center.lng}`,options);
          const resp = await req.json();
          setMarkers(resp)
      });
      } catch (err) {
        setError(err);
        /*console.log(err); */
      } finally {
        setIsLoading(false);
      }
    };
    
    if (!isLoading) {
      makeRequest();    
      
    }

       
    },[markersArray]);
    return (
        <>
            <Marker/>
            <div ref={ref} id="mapComponent"> 

            </div>
        </>
    );

}

export default MapComponent