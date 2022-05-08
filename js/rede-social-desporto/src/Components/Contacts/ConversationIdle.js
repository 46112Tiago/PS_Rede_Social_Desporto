import React from 'react';
import './ConversationIdle.css'
import FriendMsg from './Messages/FriendMsg';
import OwnMsg from './Messages/OwnMsg';
import InputText from './InputText';
import { message } from '../../Model/Model';
import DropDownGroup from './Groups/DropDownGroup';

const ConversationIdle = (props) => {
  

  const dropdown = props.dropdown ? <DropDownGroup/> : <></>
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
            {dropdown}
            <h3 id='nameConvo'>Friend/Group name</h3>
            <hr id='lineConvo'/>
            <div id='containercontact'>
              <InputText url={props.href}></InputText>
              <div id='overflowText'>

                {/*The more recent shoul be write in top because the column order is reverse in order to start at the bottom*/}
                {/* Instead of OwnMsg and FriendMsg pass this to a component Message and then there choose which on is suppose to be created */},

              {messageArray.map((messageObj,i) => 
                  <OwnMsg message={messageObj.message}></OwnMsg>
              )}

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