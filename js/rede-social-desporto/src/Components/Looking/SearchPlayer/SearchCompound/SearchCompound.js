import React from 'react';
import { useForm } from "react-hook-form";
import { convertLocationToCoordinate } from '../../../../GoogleMaps/Geocoding';

const SearchCompound = (props) => {

    const {handleSubmit,register} = useForm()

    async function submit(data) {
      const resp = await convertLocationToCoordinate(data.address)
      props.center({lat:resp.lat, lng:resp.lng})
    }

    React.useEffect(() => {

      if(!props.sportId) {
        document.getElementById('searchBarCompoundTxt').disabled = true
      }else {
        document.getElementById('searchBarCompoundTxt').disabled = false
      }
    },[props.sportId])


    return (
    <>
          <form onSubmit={handleSubmit(submit)}>
            <input name='address' className='searchBarCompoundItem' id='searchBarCompoundTxt' type="text" {...register('address')} placeholder={'Choose an area'} required/>
          </form>
    </>
      
    );
  }

  export default SearchCompound