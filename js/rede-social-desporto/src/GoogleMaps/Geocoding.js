import Geocode from "react-geocode";

export function convertLocationToCoordinate(location) {
    Geocode.setApiKey("AIzaSyCajrJ3Y0s5ubSgMAw8Gq34ujyt2TbJqi8")
    Geocode.enableDebug();
    Geocode.fromAddress(location).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            },
        (error) => {
            console.error(error);
        }
    );
}

export function convertCoordinateToLocation(lat,lng) {
    Geocode.setApiKey("AIzaSyCajrJ3Y0s5ubSgMAw8Gq34ujyt2TbJqi8") //AIzaSyCajrJ3Y0s5ubSgMAw8Gq34ujyt2TbJqi8
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



