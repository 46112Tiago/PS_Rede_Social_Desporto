import React from 'react'
import FieldModal from './FieldModal/FieldModal';
import CompoundModal from './Compound/CompoundModal';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { convertLocationToCoordinate,convertCoordinateToLocation } from '../../GoogleMaps/Geocoding';
import './Map.css'
const center = {
  lat: 38.757026,
  lng: -9.1185779
};


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <GoogleMap id='mapGoogle' center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
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

  ) : 
  <>

  </>
}



export default Map
