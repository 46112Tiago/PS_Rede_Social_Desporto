import React from 'react';
import './Contacts.css'
import './Friend.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import Account from './Account';
import ConversationIdle from './ConversationIdle';
import { user } from '../../Model/Model';

const FriendsMessage = () => {
  

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  
  const [friendArray, setUser] = React.useState([user]);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/1/friends");
        const resp = await req.json();
        setUser(resp);
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
          <div className='flex-container' >
            <div className='itemFlex' id='leftItem'>
              <div className='messageOption'>
                <button className='btnMessage' id='private'><FaUser></FaUser> Friends</button> 
              </div>
              <div className='messageOption'>
                <button className='btnMessage' onClick={() => {window.location.replace('./groups')}}><FaUsers></FaUsers> Groups</button>
              </div>
              <div id='contacts'>
                <hr id='line'/>
                <h3 id='contactsH3'>Friends:</h3> 
              </div>
              {friendArray.map((friendObj,i) => 
                        <Account key={i} friendName={friendObj.firstname} friendLName={friendObj.lastname} friendId={friendObj.user_id} friendPicture={friendObj.profilepic}></Account>
              )}
            </div>
            <div className='itemFlex' id='rightItem'>
              <ConversationIdle href={'http://localhost:8080/user/1/message/4'}></ConversationIdle>
            </div>
          </div>
        </div>
      );
    }
  

  export default FriendsMessage