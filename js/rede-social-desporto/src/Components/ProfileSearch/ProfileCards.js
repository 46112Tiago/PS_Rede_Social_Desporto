import React from 'react';
import './ProfileCards.css'

const ProfileCards = (props) =>  {
  
      return (
        <div>
          <div className="card card0">
              <div className="border">
                  <a href={`/profile/${props.userId}`}><h2 className='name'>{props.userFName} {props.userLName}Name Surname</h2></a>
              </div>
          </div>
        </div>
      );
    }

  export default ProfileCards