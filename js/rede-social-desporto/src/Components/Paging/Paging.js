import React from "react";
import './Paging.css'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const Paging = (props) => {

  function pageForward() {
    props.paging(props.page+1)
  }

  function pageBack() {
    props.paging(props.page-1)
  }

  const backBtn = props.page == 0 ? <button className="pagingBtn" disabled></button> : <button className="pagingBtn" id="previousBtn" onClick={pageBack}><MdArrowBackIos/></button>
  const forwardBtn = props.forward ? <button className="pagingBtn" id="forwardBtn" onClick={pageForward}><MdArrowForwardIos/></button> : <button className="pagingBtn"></button> 

    return (
      <div id="pagingBody">
          {backBtn}
          {forwardBtn}
      </div>
    );
  }
  

  export default Paging