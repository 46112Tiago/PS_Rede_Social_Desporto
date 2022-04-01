import React from 'react';
import './Map.css'

class Map extends React.Component {
  
    render() {
      return (
        <div >
            <script 
            src='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly'
            async></script>  
        </div>
      );
    }
  }

  export default Map