import React from 'react';
import './PostTemplate.css'
import PostWImage from './PostWImage';
import PostOText from './PostOText';

const PostTemplate = (props) => {

    let postTempaltes = props.images ? <PostWImage post={props}/> : <PostOText post={props}/>

      return (
          <>
            {postTempaltes}
          </>
      );
    }
  

  export default PostTemplate