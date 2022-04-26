import React from 'react';
import './Friends.css'
import ProfileCards from '../ProfileSearch/ProfileCards';
import SearchBar from '../SearchBar/SearchBar'

class Friends extends React.Component {
  
    render() {
      return (
        <div>
            <SearchBar></SearchBar>
            <div className='containerCards'>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
                <ProfileCards></ProfileCards>
            </div>
        </div>
      );
    }
  }

  export default Friends