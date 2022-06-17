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
    const cancel = props.created == 'created' ? <CancelBtn id={id}/> : <></>
    const sport = props.eventObj.sport ? props.eventObj.sport.name : ''
    
      return (
        <>
          <ReadModal eventObj={props.eventObj} sport={sport}></ReadModal>
          <div>
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