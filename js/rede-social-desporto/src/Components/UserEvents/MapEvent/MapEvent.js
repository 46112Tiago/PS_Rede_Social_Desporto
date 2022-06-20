import React from 'react'
import '../../Looking/SearchPlayer/MapLooking/MapLooking.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import '../../Map/Map.css'
import MapContainerLooking from '../../Looking/SearchPlayer/MapLooking/MapContainerLooking';
import MapContainerEvent from './MapContainerEvent';

const MapEvent = (props) => {

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
    <div id='mapEvent'>
        <Wrapper render={render} apiKey={/*`${process.env.REACT_APP_MAPAPI}`*/''}> 
          <MapContainerEvent center={center} zoom={5} sportId={props.sportId} markers={props.markers}></MapContainerEvent>
        </Wrapper>
    </div>

  )}

export default MapEvent
