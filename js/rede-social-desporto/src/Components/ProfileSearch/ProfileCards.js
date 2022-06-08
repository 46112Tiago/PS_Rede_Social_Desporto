import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCards.css'

const ProfileCards = (props) =>  {
    
  if(props.userId)
      return (
        <div>
          <div className="cardP card0">
              <div className="border">
                  <Link to={`/profile/${props.userId}`}><h2 className='name'>{props.userFName} {props.userLName}</h2></Link>
              </div>
          </div>
        </div>
      )
      else
      return <></>
      ;
    }

  export default ProfileCards