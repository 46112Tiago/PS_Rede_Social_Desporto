import React from 'react';
import './PostTemplate.css'
import CommentModal from '../Comment/CommentModal/CommentModal';

const PostOText = (props) => {

  const firstName = props.post.user ? props.post.user.firstName : '' 
  const lastName = props.post.user ? props.post.user.lastName : ''

      return (
        <div id='posComment'>
        <div id='postOnlyText'>
            <div id='leftPostTemplate'>
              <img id='userPost' src={require('./images/default_profile.jpg')}></img>
            </div>  
            <div id='rightPostTemplate'>
                <h4>{firstName} {lastName}</h4>
                <p className='letters'>{props.post.description}</p>
            </div>
        </div>
                    <CommentModal postId={props.post.id}></CommentModal>
                    </div>
        
      );
    }
  

  export default PostOText