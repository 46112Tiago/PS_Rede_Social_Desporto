import React from 'react';
import './Made.css'


const Made = () => {

    return (
    <>
        <div className='cardContainer'>
            <div className="card made">
                <p>Name Surname</p>
                <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                <div className='btnContainer'>
                    <button id="activateModal_pending" className='Looking' onClick={()=>{window.location.href = "#pending-modal"}}>Info</button>
                    <button id='cancelLooking' className='Looking'>Cancel</button>
                </div>            
            </div>
        </div>
    </>
      
    );
  }

  export default Made