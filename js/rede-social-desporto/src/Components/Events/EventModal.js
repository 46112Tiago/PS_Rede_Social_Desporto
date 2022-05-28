import React from "react";
import './EventModal.css'
import './EventCard.css'
import {event} from '../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";

const EventModal = (props) => {


    const [err, setError] = React.useState();
    const {getAccessTokenSilently} = useAuth0();
    const [eventDescription, setDescription] = React.useState(event);

      const makeRequest = async () => {
        setError(null);
        try {
          const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
          };
          const req =  await fetch(`http://localhost:8080/event/${props.eventId}`,options);
          const resp = await req.json();
          setDescription(resp);
        } catch (err) {
          setError(err);
          //console.log(err);
        } 
      };
  
      return (
        <div>
            <div>
            <button id="activateModalEvent" onClick={(e) => {
                                e.preventDefault();
                                window.location.href="#demo-modal";
                                makeRequest();
                                }}className = 'eventBtn'>                 
                                Descrição</button>
            </div>
            
            <div id="demo-modal" className="modalEvent">
                <div className="modal__content_Event">
                <div id='eventCardImage'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>

                    <h4 id="descriptionTitle">Descrição</h4>
                    <p>
                        {eventDescription.description}
                    </p>
                                
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
  }

  export default EventModal