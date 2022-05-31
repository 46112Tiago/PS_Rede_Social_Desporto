import React from 'react'
import FieldModal from './FieldModal/FieldModal';
import CompoundModal from './Compound/CompoundModal';
import MapComponent from './MapComponent/MapComponent';
import { convertLocationToCoordinate,convertCoordinateToLocation } from '../../GoogleMaps/Geocoding';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Map.css'
import Marker from './MapComponent/Marker/Marker';
import SearchBox from './SearchBox/SearchBox';

const center = {
  lat: 38.757026,
  lng: -9.1185779
};





const Map = () => {

  const getMap = (map) => {
    setMap(map)
  }
  

  const [map, setMap] = React.useState({});

    React.useEffect(() => {
   
  },[map]);

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <></>;
      case Status.FAILURE:
        return <></>;
      case Status.SUCCESS:
        return <></>;
    }
  };
  return(
    <div id='wrapper'>
      <div id='wrapperContainer'>
        <SearchBox></SearchBox>      
        <Wrapper render={render} apiKey={""}> 
          <MapComponent center={center} zoom={5} getMap={getMap}>
          </MapComponent>
        </Wrapper>

      </div>
      <div id='suggestion'>
        <h2 id='suggestionTxt'>Suggestions:</h2>
        <br/>
        <div id='suggestionBtn'>
          <div id='suggestionBtns'>
            <CompoundModal map={map}></CompoundModal>
            <FieldModal></FieldModal>
          </div>
        </div>

      </div>
    </div>

  )  
  }




export default Map
