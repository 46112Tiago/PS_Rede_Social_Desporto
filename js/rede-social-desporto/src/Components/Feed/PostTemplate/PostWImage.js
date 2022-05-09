import React from 'react';
import './PostTemplate.css'
import PostOText from './PostOText';

const PostWImage = (props) => {

      function test() {
        alert('test')
      }

      return (
        <div id='postWithImage'>
          <div id='imagePostContainer'>
            <img id='post_image' src={require('./images/route_template_post.jpg')} onClick={test}></img>
          </div>
          <PostOText></PostOText>
        </div>
      );
    }
  

  export default PostWImage