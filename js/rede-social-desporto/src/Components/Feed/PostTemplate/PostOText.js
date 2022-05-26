import React from 'react';
import './PostTemplate.css'
import CommentModal from '../Comment/CommentModal/CommentModal';

const PostOText = (props) => {

      return (
        <div id='posComment'>
        <div id='postOnlyText'>
            <div id='leftPostTemplate'>
              <img id='userPost' src={require('./images/default_profile.jpg')}></img>
            </div>  
            <div id='rightPostTemplate'>
                <h4>FName LName</h4>
                <p className='letters'>vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
            </div>
        </div>
                    <CommentModal></CommentModal>
                    </div>
        
      );
    }
  

  export default PostOText