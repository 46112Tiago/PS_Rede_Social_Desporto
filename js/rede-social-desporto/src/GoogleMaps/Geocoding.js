import Geocode from "react-geocode";

export async function convertLocationToCoordinate(location) {
    Geocode.setApiKey("AIzaSyB0tHJzsQnA8ouGvVxgEFXwMf-DZOIB74Y")
    Geocode.enableDebug();
    const response = await Geocode.fromAddress(location)
    return response.results[0].geometry.location;
}

export function convertCoordinateToLocation(lat,lng) {
    Geocode.setApiKey("AIzaSyB0tHJzsQnA8ouGvVxgEFXwMf-DZOIB74Y")
    Geocode.enableDebug();
    Geocode.fromLatLng(lat, lng).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
    );
}

export function verifyNewMarkers(currMarkerArray,newMarkerArray) {
  if(currMarkerArray.length == newMarkerArray.length) {
    currMarkerArray.map((compoundObj,key)=>{
      if(compoundObj.id != newMarkerArray[key].id) return true
    })
  }
  return false
}



