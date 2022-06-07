import React from 'react';
import './PostTemplate.css'
import PostWImage from './PostWImage';
import PostOText from './PostOText';

const PostTemplate = (props) => {

    let postTempaltes = props.images ? 
    <PostWImage post={props.post} images={props.images}/> : 
    <PostOText post={props.post}/>

      return (
          <>
            {postTempaltes}
          </>
      );
    }
  

  export default PostTemplate