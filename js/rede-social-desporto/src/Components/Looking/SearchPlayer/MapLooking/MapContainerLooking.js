import React from 'react'
import "./MapLooking.css";
import { useAuth0 } from "@auth0/auth0-react";

const MapContainerLooking = (props) => { 
 
    
    const ref = React.useRef();

    window.addEventListener('change', (compound) => {
        setCompoundId(compound.target.value)
      });

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [compoundId, setCompoundId] = React.useState(0);
    const [center, setCenter] = React.useState(props.center);
    const {getAccessTokenSilently} = useAuth0();

    React.useEffect(() => {
      
      const mapOptions = {
        zoom : props.zoom,
        center : center,
        minZoom : 2,
        maxZoom : 17,
        mapTypeId:google.maps.MapTypeId.SATELLITE
      }
      let map = new window.google.maps.Map(document.getElementById("mapComponent"),mapOptions);

    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        if(compoundId == 0) return 
        const token = await getAccessTokenSilently();
        const myHeaders = new Headers()
        myHeaders.append('Authorization',`Bearer ${token}`)
        const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
        };
        const req =  await fetch(`http://localhost:8080/compound/${compoundId}`,options);
        const resp = await req.json();
        const lat = resp.location.x ? resp.location.x : 0
        const lng = resp.location.y ? resp.location.y : 0
        const point = { lat : lat, lng : lng};
        
        mapOptions.zoom = 15
        mapOptions.center = point

        map = new window.google.maps.Map(document.getElementById("mapComponent"),mapOptions);       
        const marker = new window.google.maps.Marker({
            position: point,
            map,
            title: resp.name,
        });
        resp.id = resp.id      
          
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
 
},[compoundId]);


    return (
        <>
            <div ref={ref} id="mapComponent"> 

            </div>
        </>
    );

}

export default MapContainerLooking