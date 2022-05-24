import React from 'react'
import FieldModal from './FieldModal/FieldModal';
import CompoundModal from './Compound/CompoundModal';
import MapComponent from './MapComponent/MapComponent';
import { convertLocationToCoordinate,convertCoordinateToLocation } from '../../GoogleMaps/Geocoding';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Map.css'
import Marker from './Marker/Marker';

const center = {
  lat: 38.757026,
  lng: -9.1185779
};


//AIzaSyCIkVFF1vWmNB9zeS1PxsUBQWSD2gDLZ1E

const Map = () => {
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
        <div id='searchBox'></div>      
        <Wrapper render={render} apiKey={"AIzaSyCIkVFF1vWmNB9zeS1PxsUBQWSD2gDLZ1E"}> 
          <MapComponent center={center} zoom={58}>
          </MapComponent>
        </Wrapper>  
      </div>
      <div id='suggestion'>
        <h2 id='suggestionTxt'>Suggestions:</h2>
        <br/>
        <div id='suggestionBtn'>
          <div id='suggestionBtns'>
            <CompoundModal></CompoundModal>
            <FieldModal></FieldModal>
          </div>
        </div>

      </div>
    </div>

  )  
  }




export default Map
