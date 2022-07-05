import React from "react";
import  './CommentModal.css'

const Comments = (props) => {

    return (      
        <div id="comment_body">
            <div id="leftSideComment">
                <img id='userPost' src={require('../images/user.jpeg')}></img>
            </div>
            <div id="rightSideComment">
                <h5 id="nameComment">{props.firstName} {props.lastName}</h5>
                <p id="comment">{props.comment}</p>
            </div>    
        </div>
      );
  }

  export default Comments