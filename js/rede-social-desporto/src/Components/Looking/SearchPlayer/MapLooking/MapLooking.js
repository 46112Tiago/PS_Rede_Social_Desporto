import React from 'react'
import './MapLooking.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import '../../../Map/Map.css'
import MapContainerLooking from './MapContainerLooking';




const MapLooking = (props) => {

  const center = props.center ? props.center : {
    lat: 38.757026,
    lng: -9.1185779
  };

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
    <div id='mapLooking'>
        <Wrapper render={render} apiKey={`${process.env.REACT_APP_MAPAPI}`}> 
          <MapContainerLooking center={center} zoom={12} sportId={props.sportId} markers={props.markers}></MapContainerLooking>
        </Wrapper>
    </div>

  )}

export default MapLooking
