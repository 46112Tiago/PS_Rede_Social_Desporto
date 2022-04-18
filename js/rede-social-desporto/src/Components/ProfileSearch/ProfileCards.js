import React from 'react';
import './ProfileCards.css'

class ProfileCards extends React.Component {
  
    render() {
      return (
        <div>
          <div className="card card0">
              <div className="border">
                  <a href='/profile/:id'><h2 className='name'>Name Surname</h2></a>
              </div>
          </div>
        </div>
      );
    }
  }

  export default ProfileCards