import Geocode from "react-geocode";

export async function convertLocationToCoordinate(location) {
    Geocode.setApiKey("AIzaSyB0tHJzsQnA8ouGvVxgEFXwMf-DZOIB74Y")
    Geocode.enableDebug();
    const response = await Geocode.fromAddress(location)
    return response.results[0].geometry.location;
}

export async function convertCoordinateToLocation(lat,lng) {
    Geocode.setApiKey("AIzaSyAVSmVENW74eRGPzPmTe5yru9TppT6SLpY")
    Geocode.enableDebug();
    const response = await Geocode.fromLatLng(lat, lng)
    const resp = await response.results[0].formatted_address
    return resp;
}

export function verifyNewMarkers(currMarkerArray,newMarkerArray) {
  if(currMarkerArray.length == newMarkerArray.length) {
    currMarkerArray.map((compoundObj,key)=>{
      if(compoundObj.id != newMarkerArray[key].id) return true
    })
  }
  return false
}



