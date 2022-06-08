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
import { Link } from 'react-router-dom';


const Groups = () => {

  const getConversation = (idMsg) => {
    setId(idMsg)
    groupArray.forEach(groupObj=>{
      if(groupObj.owner.userId == window.name){
        setOwner(groupObj.owner.userId)
      }
    })
  }
  
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [id, setId] = React.useState(0);
    const [groupArray, setGroup] = React.useState([group]);
    const [owner,setOwner] = React.useState(0);
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

    let talkTemplate = id == 0 ? <ConversationStart/> : <ConversationIdle owner={owner} groupId={id} dropdown={true} messageType={"group"}/>

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
                    <GroupModal></GroupModal>
                    <ParticipantModal owner={owner} groupId={id}/>
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