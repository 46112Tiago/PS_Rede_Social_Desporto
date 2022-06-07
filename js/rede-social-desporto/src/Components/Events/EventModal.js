import React from "react";
import './EventModal.css'
import './EventCard.css'
import {event} from '../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";

const EventModal = (props) => {


    const [err, setError] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const {getAccessTokenSilently} = useAuth0();
    const [eventObj, setDescription] = React.useState(event);
    const [lat, setLat] = React.useState(0);
    const [lng, setLng] = React.useState(0);
    const [eventId, setId] = React.useState(0)

    React.useEffect(() => {

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
          lat = setLat(resp.compound.location.x)
          lng = setLng(resp.compound.location.y)
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
              <button id="activateModalEvent" onClick={(e) => {
                                e.preventDefault();
                                setId(props.eventId)
                                window.location.href=`#demo-modal-${props.eventId}`;
                                }}className = 'eventBtn'>                 
                                Descrição</button>
            </div>
            
            <div id={`demo-modal-${props.eventId}`} className="modalEvent">
                <div className="modal__content_Event">
                <div id='eventCardImage'>
                    <a href={`https://www.google.com/maps/@${lat},${lng},15z`} target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>

                    <h4 id="descriptionTitle">Descrição</h4>
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