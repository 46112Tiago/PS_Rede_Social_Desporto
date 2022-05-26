import React from 'react';
import './Events.css'
<<<<<<< HEAD
import EventCard from './EventCard';
import Paging from '../Paging/Paging';
import { event } from '../../Model/Model';
=======
import { FaCalendarDay, FaMapMarker, FaUserCheck, FaRunning } from 'react-icons/fa';
import EventDelete from './EventDelete';
>>>>>>> main

const Events = () => {

  const setPaging = (offset) => {
    setPage(offset)
  }
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [eventArray, setEvent] = React.useState([event]);
  const [page, setPage] = React.useState(0);
  const [forward, setForward] = React.useState(true);

  
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch(`http://localhost:8080/event?page=${page}`);
          const resp = await req.json();
          setEvent(resp);
          if(!resp[0]){
            setForward(false)
          }else{
            setForward(true)
          }
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[page]);

<<<<<<< HEAD
=======
                <div className='images'>
                    <a href='https://www.google.com/maps/place/Instituto+Superior+de+Engenharia+de+Lisboa' target={'_blank'}><img className='local_image' src={require('./mock_image/Isel_test_events.PNG')} alt='localization' title='google maps direções'></img></a>
                </div>
                <div className='text'>
                    <h3>Events Title</h3>
                    <p>Some random description in order to demonstrate</p>
                    <p><FaMapMarker></FaMapMarker> Instituto Superior de Engenharia de Lisboa</p> 
                    <p className='inline' id='data'><FaCalendarDay></FaCalendarDay> 01/04/2022</p>  
                    <p className='inline' id='modalidade'><FaRunning></FaRunning> Modalidade</p>
                    <p className='inline'><FaUserCheck></FaUserCheck> 8 / 30</p>
                    <br/>
                    <EventDelete></EventDelete> 
                    <button className='eventsBtn'>Participar</button>
                </div>
>>>>>>> main

      return (
        <>
          <div id='heigthEdit'>
            <div id='editContainer'>
            {eventArray.map((eventObj,i) => 
                <EventCard key={i} eventObj={eventObj}></EventCard>
            )}
            </div>
          </div>
          <Paging paging={setPaging} page={page} forward={forward}/>
        </>
      );
    }

  export default Events