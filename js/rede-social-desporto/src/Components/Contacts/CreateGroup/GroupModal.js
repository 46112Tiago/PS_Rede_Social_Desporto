import React from "react";
import {MdSportsTennis} from 'react-icons/md'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import CreateGroupBtn from "./CreateGroupBtn";
import './GroupModal.css'

const GroupModal = (props) => {

      return (
        <div className="modalGroupBody">
            <div className="modalGroupBody">
                <a id="activateModal_group" href="#demo-modal" className="addBtn">Create Group <BsFillPlusCircleFill></BsFillPlusCircleFill></a>
            </div>
            
            <div id="demo-modal" className="modal_group">
                <div className="modal__content_group">
                    <CreateGroupBtn created={props.created}></CreateGroupBtn>
                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default GroupModal