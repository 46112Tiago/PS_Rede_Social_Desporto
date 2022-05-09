import React from 'react';
import './PostTemplate.css'

const PostOText = (props) => {

      return (
        <div id='postOnlyText'>
            <div id='leftPostTemplate'>
              <img id='userPost' src={require('./images/default_profile.jpg')}></img>
            </div>  
            <div id='rightPostTemplate'>
                <h4>FName LName</h4>
                <p className='letters'>vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
            </div>
        </div>
      );
    }
  

  export default PostOText