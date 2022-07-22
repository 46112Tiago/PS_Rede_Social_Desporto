import React from 'react';
import '../Contacts.css'
import './Groups.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import GroupModal from '../CreateGroup/GroupModal';
import Account from '../Account';
import ConversationIdle from '../ConversationIdle';
import { api_url, group } from '../../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";
import ConversationStart from '../ConversationStart';
import ParticipantModal from './ParticipantModal/ParticipantModal';
import { Link } from 'react-router-dom';


const Groups = () => {

  const {getAccessTokenSilently,user} = useAuth0();

  const getCreated = (group) => {
    setCreatedGroup(group)
  }

  const deleted = (groupId) => {
    setDeleted(groupId)
  }

  const exited = (groupId) => {
    setExited(groupId)
  }

  const getName = (groupName) => {
    setName(groupName)
  }

  const getConversation = (idMsg) => {
    groupArray.forEach(groupObj=>{
      if(groupObj.id == idMsg){
        setOwner(groupObj.owner.email)
      }
    })
    setId(idMsg)
  }
  
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [id, setId] = React.useState(0);
    const [groupArray, setGroup] = React.useState([group]);
    const [owner,setOwner] = React.useState(0);
    const [removed,setDeleted] = React.useState(0);
    const [exit,setExited] = React.useState(0);
    const [newGroup,setCreatedGroup] = React.useState({});
    const [name,setName] = React.useState('');

    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const token = await getAccessTokenSilently();
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
                method: "GET",
                headers: myHeaders,
                mode: 'cors',
            };
            const email = user.email.split("@")[0]
            const req =  await fetch(`${api_url}/user/group?email=${email}`,options);
            const resp = await req.json();
            /*Check if the loged in user has the same id as the owner of the group*/
            //owner = resp.owner.userId == userId ? true : false
            setGroup(resp);
          
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (!isLoading) makeRequest();
    },[id,newGroup,removed,exit]);

    let talkTemplate = id == 0 ? <ConversationStart/> : <ConversationIdle name={name} owner={owner} groupId={id} dropdown={true} messageType={"group"} delete={deleted} exit={exited} />

      return (
          <div>
              <div className='flex-container' >
                  <div className='itemFlex' id='leftItem'>
                      <div className='messageOption'>
                          <Link className='btnMessage' to='/friendsMessage'><FaUser></FaUser> Friends</Link> 
                      </div>
                  <div className='messageOption'>
                      <button className='btnMessage' id='group' ><FaUsers></FaUsers> Groups</button>
                  </div>
                  <div id='contacts'>
                    <hr id='line'/>
                    <h3 id='contactsH3'>Groups:</h3>
                    <GroupModal created={getCreated}></GroupModal>
                    <ParticipantModal owner={owner} groupId={id}/>
                      {groupArray.map((groupObj,i) => 
                          <Account getName={getName} getConversation={getConversation} key={i} name={groupObj.name} accountId={groupObj.id} picture={groupObj.picture}></Account>
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