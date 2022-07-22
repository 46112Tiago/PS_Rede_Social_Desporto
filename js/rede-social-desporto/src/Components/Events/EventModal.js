import React from "react";
import './EventModal.css'
import './EventCard.css'
import {api_url, event} from '../../Model/Model'

const EventModal = (props) => {


    const [err, setError] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [eventObj, setDescription] = React.useState(event);
    const [coordinate, setCoordinate] = React.useState({lat:0.0,lng:0.0});
    const [eventId, setId] = React.useState(0)

    React.useEffect(() => {

      const makeRequest = async () => {
        setError(null);
        try {
          const options = {
            method: "GET",
            mode: 'cors',
          };
          const req =  await fetch(`${api_url}/event/${props.eventId}`,options);
          const resp = await req.json();
          setDescription(resp);
          setCoordinate({
            lat:resp.compound.location.x,
            lng:resp.compound.location.y
          })
        } catch (err) {
          setError(err);
          //console.log(err);
        } 
      };
      if (eventId!=0) makeRequest();
    },[eventId])
  
      return (
        <div>
            <div>

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

              <button id="activateModalEvent" onClick={(e) => {
                                e.preventDefault();
                                setId(props.eventId)
                                window.location.href=`#demo-modal-${props.eventId}`;
                                }}className = 'eventBtn'>                 
                                Description</button>
            </div>
            
            <div id={`demo-modal-${props.eventId}`} className="modalEvent">
                <div className="modal__content_Event">
                <div id='eventCardImage'>
                    <a href={`https://www.google.com/maps/@${coordinate.lat},${coordinate.lng},15z`} target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>

                    <h4 id="descriptionTitle">Description</h4>
                    <p>
                        {eventObj.description}
                    </p>
                                
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
  }

  export default EventModal