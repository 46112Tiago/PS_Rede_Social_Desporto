import React from 'react';
import './Navigate.css'


const Navigate = () => {

    return (
    <>
        <div className='cardContainer'>
            <div className="card navigate">
                <p>Name Surname</p>
                <img src={require('../../img/default_profile.jpg')} id='photoLooking'></img>
                <div className='btnContainer'>
                    <button id="activateModal_pending" className='Looking' onClick={()=>{window.location.href = "#looking-modal"}}>Info</button>
                    <button id='participateLooking' className='Looking'>Participate</button>
                </div>            
            </div>
        </div>
    </>
      
    );
  }

  export default Navigate