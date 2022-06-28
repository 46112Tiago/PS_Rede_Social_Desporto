import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";import './SearchBox.css'
import { convertLocationToCoordinate } from '../../../GoogleMaps/Geocoding';

const SearchBox = (props) => {

  // user state for form
  const [name, setName] = useState('');
  const { register, handleSubmit } = useForm();

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setName(''), 1000);
    }, [name]);

    async function submit(data) {
      const resp = await convertLocationToCoordinate(data.name)
      props.center({lat:resp.lat, lng:resp.lng})
    }
    

    return (
    <div id='searchBox'>
        <p className='sport'>Modalidade</p>
        <p className='town'>Município</p>
        <p className='activeEvents'>Eventos Ativos</p>
        <p className='open'>Abertos agora</p>
        <div id='searchBarCompound'>
          <form onSubmit={handleSubmit(submit)}>
            <input name='name' className='searchBarCompoundItem' id='searchBarCompoundTxt' type="text" {...register('name')} placeholder='Search...' required/>
          </form>
        </div>    
    </div>
    );
}
  

  export default SearchBox