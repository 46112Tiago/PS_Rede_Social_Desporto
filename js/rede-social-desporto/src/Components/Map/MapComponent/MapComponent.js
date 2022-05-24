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
    myHeaders.append('authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJLb3pWaFZPYmVSbzg3dHRkSU0xdSJ9.eyJpc3MiOiJodHRwczovL2Rldi03eHNpcjNhaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiUEt3R0k2emlaOTNhbnE5YzEzejBwYWV0MG5VYXhxV3VAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTY1MzM0ODMzMSwiZXhwIjoxNjUzNDM0NzMxLCJhenAiOiJQS3dHSTZ6aVo5M2FucTljMTN6MHBhZXQwblVheHFXdSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.DqtWy4PZ-6TTi2Nus0mjoG-4o3GKFJUyryW-IrIxwaYmTmHL1sTrBsfxhlxlhqTzNvkwoOkQtT9hqpgUAHZsUSrz8_TqwjSjoUDHpWhgKiJ-658Lw5CxlkJr3OwlGfx7i9VXNW7FJAlgITfv2xsBHaY347HgqTjAo8nOL-AB0eOONz4e1Gl3lRgvxp0ilrRFgCe6mn3BdR52GskWH9f77TkCPUBi1beiTn6AxJIAy0QxXsz5dHvIi-MSMYSgv7__P2EffNqdXCKoEGmKS2MIwwrXR0v4bhWXo5mI38Eiysik_z4GuhejVbaAskB7iqxs55gl1bY3wrl7VVfJfX_mwg');

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
          new window.google.maps.Marker({
              position: element.location.value,
              map,
              title: "Marker",
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
            {React.Children.map(Marker, child => (
                React.cloneElement(child, {style: {...child.props.style, opacity: 0.5}})
            ))}
            </div>
        </>
    );

}

export default MapComponent