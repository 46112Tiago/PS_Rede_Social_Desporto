import React from 'react';
import '../Contacts.css'
import './Friend.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import Account from '../Account';
import ConversationIdle from '../ConversationIdle';
import { user } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import ConversationStart from '../ConversationStart';
import { Link } from 'react-router-dom';

const FriendsMessage = () => {
  
  const getConversation = (idMsg) => {
    setId(idMsg)
    console.log(idMsg)
  }


  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const {getAccessTokenSilently} = useAuth0();
  const [friendArray, setUser] = React.useState([user]);
  const [id, setId] = React.useState(0);

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        if(id == 0){
          const token = await getAccessTokenSilently();
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)
            myHeaders.append('Content-type',`application/json`)
            const options = {
                method: "GET",
                headers: myHeaders,
                mode: 'cors',
            };
          const req =  await fetch(`http://localhost:8080/user/${window.name}/friends`,options);
          const resp = await req.json();
          setUser(resp);
        }

      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoading) makeRequest();
  },[id]);

  let talkTemplate = id == 0 ? <ConversationStart/> : <ConversationIdle dropdown={false} friendId={id} messageType={"friend"}/>

      return (
        <div>
          <div className='flex-container' >
            <div className='itemFlex' id='leftItem'>
              <div className='messageOption'>
                <button className='btnMessage' id='private'><FaUser></FaUser> Friends</button>
              </div>
              <div className='messageOption'>
                <Link className='btnMessage' to='/groups'><FaUsers></FaUsers> Groups</Link>  
              </div>
              <div id='contacts'>
                <hr id='line'/>
                <h3 id='contactsH3'>Friends:</h3> 
              </div>
              {friendArray.map((friendObj,i) => 
                        <Account getConversation={getConversation} key={i} name={friendObj.firstName} lastname={friendObj.lastName} accountId={friendObj.userId} picture={friendObj.profilepic}></Account>
              )}
            </div>
            <div className='itemFlex' id='rightItem'>
              {talkTemplate}
            </div>
          </div>
        </div>
      );
    }
  

  export default FriendsMessage