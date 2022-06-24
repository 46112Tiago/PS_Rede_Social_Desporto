import React from 'react';
import './ParticipantModal.css'
import AddParticipant from '../AddParticipant/AddParticipant';
import SeeParticipant from '../SeeParticipants/SeeParticipant';
import { useAuth0 } from "@auth0/auth0-react";

const ParticipantModal = (props) => {


    const [groupId, setId] = React.useState(0);
    const [component, setComponent] = React.useState(<></>);
    const {user} = useAuth0();

    React.useEffect(() => {
      setId(props.groupId)
    },[component,groupId]);
  
      return (
        <>  
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
            <div id={`add-participant-modal-${props.groupId}`} className="modal_participant">
                <div className="modal__content_participant">
                    <a href="#" className="modal__close" onClick={()=>{
                      document.getElementById('add').checked=false
                      document.getElementById('see').checked=false
                      setComponent(<></>)
                      
                      }}>&times;</a>
                    <h1>Participants:</h1>
                    {/*
                            The MIT License (MIT)

                            Copyright (c) 2022 by Scott Kennedy (https://codepen.io/scottyzen/pen/ZEWYdZm)

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
                    <div id='radioP'>
                      <div className="radioParticipant" >
                        { props.owner == user.email ? <input label="Add Participants" type="radio" id="add" name="participant" value="Add" onChange={() => {setComponent(<AddParticipant groupId={props.groupId}  />)}} /> : <></> }
                        <input label="See Participants" type="radio" id="see" name="participant" value="See" onChange={() => {setComponent(<SeeParticipant groupId={props.groupId} owner={props.owner} />)}} />
                      </div>
                    </div>
                    {component}
                </div>
            </div>
        </>

      );
    }
  export default ParticipantModal