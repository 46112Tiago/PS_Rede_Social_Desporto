import React from 'react';
import './Accept.css'


const Accept = () => {

    return (
    <>
        <div className='cardContainer'>
            <div className="card accept">
                <p>Name Surname</p>
                <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                <div className='btnContainer'>
                    <button id="activateModal_pending" className='Looking' onClick={()=>{window.location.href = "#pending-modal"}}>Info</button>
                    <button id='acceptLooking' className='Looking'>Accept</button>
                </div>            
            </div>
        </div>
    </>
      
    );
  }

  export default Accept