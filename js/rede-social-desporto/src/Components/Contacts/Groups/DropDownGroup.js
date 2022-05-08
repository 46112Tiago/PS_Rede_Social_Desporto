import React from 'react';
import './DropDownGroup.css'
import { HiDotsVertical } from 'react-icons/hi'



const DropDownGroup = () => {

  
      return (
<div class="navbarG">
  <div class="dropdownG">
    <button class="dropbtnG"><HiDotsVertical/></button>
    <div class="dropdown-contentG">
      <a href="#">Add Participant</a>
      <a href="#">See Participant</a>
      <a href="#">Exit</a>
    </div>
  </div> 
</div>
      );
    }

  export default DropDownGroup