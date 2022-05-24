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
    myHeaders.append('authorization','Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpjOWJfN1VEd0p2OVo2Q3pmdDJjNSJ9.eyJpc3MiOiJodHRwczovL2Rldi1keHZkNnotcC5ldS5hdXRoMC5jb20vIiwic3ViIjoiSUNkVkt3Q0RNaEtFUTNxZ0tROU9KeENxV2VZMjE1N3hAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTY1MzQwMjE5NSwiZXhwIjoxNjUzNDg4NTk1LCJhenAiOiJJQ2RWS3dDRE1oS0VRM3FnS1E5T0p4Q3FXZVkyMTU3eCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Rfnnp1lQsU8Ro8Xhe4PmqQz_HyXWR8dNdyXBIsPTfQHV-l8LgZaE06L7v76hF39iQkLiefTcOrl04Iq_HFm4mHI_AvVzATwumG-5zatwao4jyyIh0Ta63d3tr7zGoi4OSxnjtYiXyqJTriRRwhn4yqbExwy6jYJ2alX0SNAUNuOq0lTP-VBd33mVyTdPkNJ3V_49H4082oUnpD8hd2K8DMNONLCs3QNAg_Z5ExUPzUtw9AoP4Q3mX27fWHvSG4sKG9yAqMLOr2EyyJ9ODJ6KxTYHg5OBW8D-eoDx3BzV-xa3AMBDkl4Yr8vsXAk6bEFWmrjP1w3z6NlVzHjPbClApA');

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
          marker.addListener("click", () => {
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