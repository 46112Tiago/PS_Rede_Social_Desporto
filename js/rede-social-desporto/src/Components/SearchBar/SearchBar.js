import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './SearchBar.css'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = (props) => {

  function reset() {
    document.getElementById('searchBarTxt').value = ''
  }

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [name, setName] = useState('');

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setName(''), 1000);
  }, [name]);


  async function submit(data) {
    props.setName(data)
  }
  
      return (
        <div id='searchBar'>
          <form onSubmit={handleSubmit(submit)}>
            <button className='searchBarItem' id='searchBtn' ><FaSearch></FaSearch></button>
            <input name='name' className='searchBarItem' id='searchBarTxt' type="text" {...register('name')} placeholder='Search...' required/>
          </form>
          <button className='searchBarItem' id='cancelBtn' onClick={reset}><FaTimes></FaTimes></button>
        </div>
      );
    }
  

  export default SearchBar