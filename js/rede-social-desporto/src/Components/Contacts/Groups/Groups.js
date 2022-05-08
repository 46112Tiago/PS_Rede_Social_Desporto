import React from 'react';
import '../Contacts.css'
import './Groups.css'
import { FaUser, FaUsers } from 'react-icons/fa';
import GroupModal from '../CreateGroup/GroupModal';
import Account from '../Account';
import ConversationIdle from '../ConversationIdle';
import { group } from '../../../Model/Model';
import ConversationStart from '../ConversationStart';


const Groups = () => {
  
    
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [id, setId] = React.useState(0);
    const [groupArray, setGroup] = React.useState([group]);
  
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
            const req =  await fetch("http://localhost:8080/user/1/group");
            const resp = await req.json();
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

    let talkTemplate = id == 0 ? <ConversationStart/> : <ConversationIdle dropdown={true} href={`http://localhost:8080/user/1/group/${id}/message`}/>

    const getConversation = (idMsg) => {
      setId(idMsg)
      console.log(id)
    }
  

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
                        {groupArray.map((groupObj,i) => 
                            <Account getConversation={getConversation} key={i} groupName={groupObj.name}  groupId={groupObj.id} groupdPicture={groupObj.picture}></Account>
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