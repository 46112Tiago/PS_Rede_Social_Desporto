import React from 'react';
import './ConversationIdle.css'
import FriendMsg from './FriendMsg';
import OwnMsg from './OwnMsg';
import InputText from './InputText';
import { message } from '../../Model/Model';

const ConversationIdle = (props) => {
  

  const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    
    const [messageArray, setMessage] = React.useState([message]);
  
    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch(`${props.href}`);
          const resp = await req.json();
          setMessage(resp);
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[]);

      return (
        <div>
            <h3 id='nameConvo'>Friend/Group name</h3>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText url={props.href}></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}

                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                <OwnMsg></OwnMsg>
                <FriendMsg></FriendMsg>
                <FriendMsg></FriendMsg>
                
              </div>

            </div>
        </div>
      );
    }
  

  export default ConversationIdle