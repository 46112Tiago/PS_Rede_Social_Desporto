import React from 'react'
import FieldModal from './FieldModal/FieldModal';
import CompoundModal from './Compound/CompoundModal';
import MapComponent from './MapComponent/MapComponent';
import { convertLocationToCoordinate,convertCoordinateToLocation } from '../../GoogleMaps/Geocoding';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Map.css'
import Marker from './MapComponent/Marker/Marker';
import SearchBox from './SearchBox/SearchBox';
import Suggestion from './Suggestion';

const center = {
  lat: 38.757026,
  lng: -9.1185779
};


const Map = () => {

  const getMap = (map) => {
    setMap(map)
  }

  const getCenter = (newCenter) => {
    setCenter(newCenter)
  }
  

  const [map, setMap] = React.useState({});
  const [newCenter, setCenter] = React.useState(center);

    React.useEffect(() => {

  },[map,newCenter]);

  const suggestion = window.name ? <Suggestion map={map}/> : <></>

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
        <SearchBox center={getCenter}></SearchBox>      
        <Wrapper render={render} apiKey={""}> 
          <MapComponent center={newCenter} zoom={5} getMap={getMap}>
          </MapComponent>
        </Wrapper>

      </div>
      {suggestion}

    </div>

  )}




export default Map
