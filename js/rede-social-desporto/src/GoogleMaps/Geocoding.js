export function verifyNewMarkers(currMarkerArray,newMarkerArray) {
  if(currMarkerArray.length == newMarkerArray.length) {
    currMarkerArray.map((compoundObj,key)=>{
      if(compoundObj.id != newMarkerArray[key].id) return true
    })
  }
  return false
}


/*

Based on https://github.com/shukerullah/react-geocode    13-05-2022

MIT License

Copyright (c) 2018 Pir Shukarullah Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import Geocode from "react-geocode";

export async function convertLocationToCoordinate(location) {
    Geocode.setApiKey(`${process.env.REACT_APP_GEOCODING}`)
    Geocode.enableDebug();
    const response = await Geocode.fromAddress(location)
    return response.results[0].geometry.location;
}

export async function convertCoordinateToLocation(lat,lng) {
    Geocode.setApiKey(`${process.env.REACT_APP_GEOCODING}`)
    Geocode.enableDebug();
    const response = await Geocode.fromLatLng(lat, lng)
    const resp = await response.results[0].formatted_address
    return resp;
}



