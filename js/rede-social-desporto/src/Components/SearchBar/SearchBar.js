import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";import './SearchBar.css'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = () => {

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

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
    };

    fetch(`http://localhost:8080/user/search?name=${data.name}`, options)
    .then(response => response.json())
    .then(data => console.log(data));
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