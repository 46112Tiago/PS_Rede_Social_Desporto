import React from 'react';
import './Confirmed.css'


const Confirmed = () => {

    return (
    <>
        <div className='cardContainer'>
            <div className="card confirmed">
                <p>Name Surname</p>
                <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                <div>
                    <button id="activateModal_pending" className='infoLooking' onClick={()=>{window.location.href = "#looking-modal"}}>Info</button>
                </div>            
            </div>
        </div>
    </>
      
    );
  }

  export default Confirmed