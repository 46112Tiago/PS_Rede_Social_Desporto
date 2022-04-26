import React from "react";
import './EventModal.css'
import './EventCard.css'
import {MdSportsTennis} from 'react-icons/md'

class EventModal extends React.Component {

    render() {
      return (
        <div>
            <div>
            <button id="activateModalEvent" onClick={(e) => {
                                e.preventDefault();
                                window.location.href="#demo-modal";
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
                        Some description
                    </p>
                    
                    
                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }
  }

  export default EventModal