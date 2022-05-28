import React from 'react';
import '../Contacts.css'
import './Groups.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import GroupModal from '../CreateGroup/GroupModal';
import Account from '../Account';
import ConversationIdle from '../ConversationIdle';
import { group } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import ConversationStart from '../ConversationStart';
import ParticipantModal from './ParticipantModal/ParticipantModal';


const Groups = () => {

  const getConversation = (idMsg) => {
    window.localStorage.setItem('groupId',idMsg)
    setId(idMsg)
  }
  
    const owner = false
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [id, setId] = React.useState(0);
    const [groupArray, setGroup] = React.useState([group]);
    const {getAccessTokenSilently} = useAuth0();

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
            const options = {
                method: "GET",
                headers: myHeaders,
                mode: 'cors',
            };
            const req =  await fetch(`http://localhost:8080/user/${window.name}/group`,options);
            const resp = await req.json();
            /*Check if the loged in user has the same id as the owner of the group*/
            //owner = resp.owner.userId == userId ? true : false
            setGroup(resp);
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

    let talkTemplate = id == 0 ? <ConversationStart/> : <ConversationIdle owner={owner.userId} groupId={id} dropdown={true}/>

      return (
          <div>
              <div className='flex-container' >
                  <div className='itemFlex' id='leftItem'>
                      <div className='messageOption'>
                          <button className='btnMessage' onClick={() => {window.location.replace('./friendsMessage')}}><FaUser></FaUser> Friends</button> 
                      </div>
                  <div className='messageOption'>
                      <button className='btnMessage' id='group' ><FaUsers></FaUsers> Groups</button>
                  </div>
                  <div id='contacts'>
                    <hr id='line'/>
                    <h3 id='contactsH3'>Groups:</h3>
                    <GroupModal></GroupModal>
                    <ParticipantModal owner={owner}/>
                      {groupArray.map((groupObj,i) => 
                          <Account getConversation={getConversation} key={i} name={groupObj.name}  accountId={groupObj.id} picture={groupObj.picture}></Account>
                      )}
                  </div>      
                  </div>
                  <div className='itemFlex' id='rightItem'>
                        {talkTemplate}
                  </div>
              </div>
          </div>
      );
    }
  

  export default Groups