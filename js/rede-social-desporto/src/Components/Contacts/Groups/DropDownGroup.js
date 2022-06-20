import React from 'react';
import './DropDownGroup.css'
import './AddParticipant/AddParticipant.css'
import { HiDotsVertical } from 'react-icons/hi'
import ExitGroup from './ExitGroup/ExitGroup';
import DeleteGroup from './DeleteGroup/DeleteGroup';
import { useAuth0 } from '@auth0/auth0-react';


const DropDownGroup = (props) => {

  const {user} = useAuth0();

  const deleteGroup = props.owner == user.email ? <DeleteGroup delete={props.delete} groupId={props.groupId}></DeleteGroup> : <ExitGroup exit={props.exit} groupId={props.groupId}/>

      return (  
        <div class="navbarG">
          <div class="dropdownG">
            <button class="dropbtnG"><HiDotsVertical/></button>
            <div class="dropdown-contentG">
              <a href={`#add-participant-modal-${props.groupId}`} >Participant</a>
              {deleteGroup}
            </div>
          </div> 
        </div>
      );
    }

  export default DropDownGroup