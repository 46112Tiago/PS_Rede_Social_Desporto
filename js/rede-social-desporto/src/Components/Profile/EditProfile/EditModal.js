import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './EditModal.css'
import {MdEdit} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url, sport } from '../../../Model/Model';
import AddSportUser from './AddSportUser/AddSportUser';
import { converttoSportsArray } from '../../../Functions/Functions';
import { sportArrayId } from './AddSportUser/AddSportUser';

const EditModal = (props) => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const {getAccessTokenSilently,user} = useAuth0()
  const [edited, setEdited] = React.useState({});
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
    const email = user.email.split("@")[0]
    const response = await fetch(`${api_url}/user?email=${email}`, options)
    const resp = await response.json()
    setEdited(resp)
    props.edit(response)
    window.location.href = "#"
    
}
      return (
        <div id='editModal'>
            {/*

                The MIT License (MIT)

                Copyright (c) 2022 by Marko (https://codepen.io/denic/pen/ZEbKgPp)

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.

            */}
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
                        <AddSportUser deleted={props.deleted} edit={edited} />
                        <br/><br/>
                        <label>Available:</label>
                        <br/><br/>
                            
                            {  /*

                            The MIT License (MIT)

                            Copyright (c) 2022 by Navigation bar (https://codepen.io/Mr_Rahul_Tiwari/pen/ZEWMZNV)

                            Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:

                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.

                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.
                            
                            */}

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