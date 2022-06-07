import React from "react";
import '../ReadModal.css'

const ReadBtn = (props) => {

      return (
        <>
            <a href={`#user-event-${props.eventId}`}>Read me</a>
        </>

      );
    }

  export default ReadBtn