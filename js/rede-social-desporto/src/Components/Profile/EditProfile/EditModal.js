import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './EditModal.css'
import {MdEdit} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";
import { sport } from '../../../Model/Model';
import AddSportUser from './AddSportUser/AddSportUser';
import { converttoSportsArray } from '../../../Functions/Functions';
import { sportArrayId } from './AddSportUser/AddSportUser';

const EditModal = (props) => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently} = useAuth0()
  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')


  async function submit(data) {

    const token = await getAccessTokenSilently()
    myHeaders.append('Authorization',`Bearer ${token}`)
    const newEditSport = converttoSportsArray(sportArrayId)
    data.sports = newEditSport
    const options = {
        method: "PUT",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };
    console.log(options.body)
    const response = await fetch(`http://localhost:8080/user/${window.name}`, options)
    props.edit(response)
    window.location.href = "#"
    
}

  
      return (
        <div id='editModal'>
            <div>
                <a href='#edit-modal' className='anchorBtn'><MdEdit></MdEdit></a>
            </div>
            <div id="edit-modal" className="modalEdit">
                <div className="modal_content_Edit">
                    <h1>Edit Profile</h1>
                    <form id='editForm' onSubmit={handleSubmit(submit)}>
                        <label>City:</label>
                        <br/>
                        <input type={'text'} {...register('city')}  placeholder='City'></input>
                        <br/><br/>
                        <br/><br/>
                        <AddSportUser />
                        <br/><br/>
                        <label>Available:</label>
                        <br/><br/>
                        <div className="toggle-button-cover">
                                <div className="button r" id="button">
                                <input type="checkbox" className="checkbox" {...register('available')}/>
                                <div className="knobs"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='editDiv'>
                            <input type='submit' value='Edit' id='subEdit'></input>
                        </div>
                    </form>

                <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
        </div>
      );
    }

  export default EditModal