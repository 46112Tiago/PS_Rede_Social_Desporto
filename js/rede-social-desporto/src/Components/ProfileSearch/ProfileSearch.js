import React from 'react';
import './ProfileSearch.css'
import ProfileCards from './ProfileCards';
import SearchBar from '../SearchBar/SearchBar'

class ProfileSearch extends React.Component {
  
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

  export default ProfileSearch