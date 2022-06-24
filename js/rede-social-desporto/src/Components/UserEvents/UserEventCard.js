import React from 'react';
import './UserEventCard.css'
import CancelBtn from './CancelBtn/CancelBtn';
import { FaCalendarDay, FaMapMarker, FaRunning } from 'react-icons/fa';
import ReadModal from './ReadModal/ReadModal';
import ReadBtn from './ReadModal/ReadBtn/ReadBtn';

const UserEventCard = (props) => {

    const getInfo = (data) => {
      setInfo(data)
    }

    const getLocation = (data) => {
      setLocation(data)
    }

    const [location, setLocation] = React.useState("");
    const [info, setInfo] = React.useState({});

    React.useEffect(() => {

    },[info]);

    const name = props.eventObj ? props.eventObj.name : ''
    const id = props.eventObj ? props.eventObj.id : 0 
    const cancel = props.created == 'created' ? <CancelBtn id={id} cancel={props.cancel}/> : <></>
    const sport = props.eventObj.sport ? props.eventObj.sport.name : ''
    
      return (
        <>
          <ReadModal eventObj={props.eventObj} sport={sport}></ReadModal>
          <div>
                {/*

                Copyright (c) 2022 - Tiago Alves - https://codepen.io/Jhonierpc/pen/MWgBJpy

                Permission is hereby granted, free of charge, to any person 
                obtaining a copy of this software and associated documentation 
                files (the "Software"), to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify, 
                merge, publish, distribute, sublicense, and/or sell copies of 
                the Software, and to permit persons to whom the Software is 
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall 
                be included in all copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
                DEALINGS IN THE SOFTWARE.

                */}
              <div className="cardEvents">
                <div className="face face1">
                  <div className="contentEvent">
                    <h3>{name}</h3>
                  </div>
                </div>
                <div className="face face2">
                      <div className="contentEvent">
                        {/*Add in the read me the image and the description in a pop up */}
                        <ReadBtn eventId={id}></ReadBtn>
                        {cancel}
                      </div>
                  </div>
              </div>              
          </div>
          
        </>
      );
    }
  

  export default UserEventCard