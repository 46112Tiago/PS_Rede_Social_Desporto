import React from 'react'
import MapComponent from './MapComponent/MapComponent';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Map.css'
import SearchBox from './SearchBox/SearchBox';
import Suggestion from './Suggestion';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../Loading/Loading';

const center = {
  lat: 38.757026,
  lng: -9.1185779
};


const Map = () => {


  const {isAuthenticated} = useAuth0();

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

  const suggestion = isAuthenticated ? <Suggestion map={map}/> : <></>

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Loading/>;
    }
  };
  return(
    <div id='wrapper'>
      <div id='wrapperContainer'>
        <SearchBox center={getCenter}></SearchBox>
        <Wrapper render={render} apiKey={`${process.env.REACT_APP_MAPAPI}`}> 
          <MapComponent center={newCenter} zoom={5} getMap={getMap}>
          </MapComponent>
        </Wrapper>

      </div>
      {suggestion}

    </div>

  )}




export default Map
