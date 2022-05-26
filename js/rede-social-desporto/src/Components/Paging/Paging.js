import React from "react";
import './Paging.css'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const Paging = (props) => {

      return (
        <div id="pagingBody">
            <button className="pagingBtn" id="previousBtn"><MdArrowBackIos/></button>
            <button className="pagingBtn" id="forwardBtn"><MdArrowForwardIos/></button>
        </div>
      );
    }
  

  export default Paging