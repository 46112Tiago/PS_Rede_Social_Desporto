import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './MapLooking.css'

const center = {
  lat: 38.757026,
  lng: -9.1185779
};


function MapLooking() {
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
    <div id='mapLooking'>
      <GoogleMap id='mapGoogleLooking' center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </div>

  ) : 
  <>

  </>
}

export default MapLooking
