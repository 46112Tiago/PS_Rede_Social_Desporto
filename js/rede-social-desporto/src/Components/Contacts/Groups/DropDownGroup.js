import React from 'react';
import './DropDownGroup.css'
import './AddParticipant/AddParticipant.css'
import { HiDotsVertical } from 'react-icons/hi'
import ExitGroup from './ExitGroup/ExitGroup';
import DeleteGroup from './DeleteGroup/DeleteGroup';


const DropDownGroup = (props) => {

  const deleteGroup = props.owner ? <DeleteGroup></DeleteGroup> : <></>

      return (  
        <div class="navbarG">
          <div class="dropdownG">
            <button class="dropbtnG"><HiDotsVertical/></button>
            <div class="dropdown-contentG">
              <a href="#add-participant-modal" >Participant</a>
              {deleteGroup}
              <ExitGroup/>
            </div>
          </div> 
        </div>
      );
    }

  export default DropDownGroup