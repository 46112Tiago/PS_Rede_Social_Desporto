import React from 'react';
import './ProfileCards.css'

const ProfileCards = (props) =>  {
    
  if(props.userId)
      return (
        <div>
          <div className="cardP card0">
              <div className="border">
                  <a href={`/profile/${props.userId}`}><h2 className='name'>{props.userFName} {props.userLName}</h2></a>
              </div>
          </div>
        </div>
      )
      else
      return <></>
      ;
    }

  export default ProfileCards