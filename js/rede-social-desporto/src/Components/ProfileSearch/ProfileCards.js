import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCards.css'

const ProfileCards = (props) =>  {
    
  if(props.email)
      return (
        <div>
          <div className="cardP card0">
              <div className="border">
                  <Link to={`/profile/${props.email.split("@")[0]}`}><h2 className='name'>{props.userFName} {props.userLName}</h2></Link>
              </div>
          </div>
        </div>
      )
      else
      return <></>
      ;
    }

  export default ProfileCards