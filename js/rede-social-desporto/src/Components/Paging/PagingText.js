import React from "react";
import './PagingText.css'

const PagingText = (props) => {

    function limit() {
        props.setNewLimit(props.limit+10)
    }

    return (
      <div id="pagingTextBody">
        <button id="pagingMore" onClick={limit}>More</button>
      </div>
    );
  }
  

  export default PagingText