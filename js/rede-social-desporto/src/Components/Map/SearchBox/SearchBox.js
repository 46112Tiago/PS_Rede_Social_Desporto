import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";import './SearchBox.css'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBox = () => {

  function reset() {
    //document.getElementById('searchBarTxt').value = ''
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


    return (
    <div id='searchBox'>
        <a className='sport'>Modalidade</a>
        <a className='town'>Município</a>
        <a className='activeEvents'>Eventos Ativos</a>
        <a className='open'>Abertos agora</a>
    </div>
    );
}
  

  export default SearchBox