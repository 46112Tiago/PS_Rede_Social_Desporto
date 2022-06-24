import React from "react";
import {MdSportsTennis} from 'react-icons/md'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import CreateGroupBtn from "./CreateGroupBtn";
import './GroupModal.css'

const GroupModal = (props) => {

      return (
        <div className="modalGroupBody">
          {/*
                    
          The MIT License (MIT)

          Copyright (c) 2022 by Marko (https://codepen.io/denic/pen/ZEbKgPp)

          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
          
          */}
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