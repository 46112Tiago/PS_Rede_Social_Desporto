import React from 'react';
import './PostTemplate.css'
import PostOText from './PostOText';

const PostWImage = (props) => {


      return (
        <div id='postWithImage'>
          <div id='imagePostContainer'>
            <img id='post_image'></img>
          </div>
          <PostOText post={props.post}></PostOText>
        </div>
      );
    }
  

  export default PostWImage