import React from 'react';
import './SearchBar.css'
import { FaSearch, FaTimes } from 'react-icons/fa';

class SearchBar extends React.Component {
  
    render() {
      return (
        <div id='searchBar'>
            <button className='searchBarItem' id='searchBtn'><FaSearch></FaSearch></button>
            <input  className='searchBarItem' id='searchBarTxt' type="text" placeholder='Search...' required/>
            <button className='searchBarItem' id='cancelBtn'><FaTimes></FaTimes></button>
        </div>
      );
    }
  }

  export default SearchBar