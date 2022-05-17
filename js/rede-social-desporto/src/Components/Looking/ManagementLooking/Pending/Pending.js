import React from 'react';
import './Pending.css'


const Pending = () => {

    return (
    <>
        <div className='cardContainer'>
            <div className="card pending">
                <p>Name Surname</p>
                <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                <div>
                    <button id="activateModal_pending" className='infoLooking' onClick={()=>{window.location.href = "#pending-modal"}}>Info</button>
                </div>            
            </div>
        </div>
    </>
      
    );
  }

  export default Pending