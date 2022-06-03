import React from "react";
import './PagingText.css'

const PagingText = (props) => {

    function page() {
        props.setNewPage(props.page+1)
    }

    return (
      <div id="pagingTextBody">
        <button id="pagingMore" onClick={page}>More</button>
      </div>
    );
  }
  

  export default PagingText