import React from 'react';
import '../UserEventCard.css'

const CancelBtn = (props) => {

  function canceled() {

    const options = {
        method: "PUT",
        mode: 'cors'
    };

    fetch(`http://localhost:8080/event/${props.id}`, options)
    .then(() => console.log('success'))
}

  
      return (
        <div>
            <br/>
            <button onClick={canceled}>Cancel</button>
        </div>
      );
    }
  

  export default CancelBtn