import React from 'react';
import './Post.css'
import CreatePost from './CreatePost/CreatePost';
import PostTemplate from './PostTemplate/PostTemplate';
import { post } from '../../Model/Model';

const Post = (props) => {


  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();  
  const [postArray, setPost] = React.useState([post]);
  
    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {
      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const req =  await fetch(`http://localhost:8080/user/1/post`);
          const resp = await req.json();
          setPost(resp);
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[]);
  

      return (
        <div id='feed'>
            <div id='postContent'>
                <div id='createPostComponent'>
                    <CreatePost></CreatePost>
                </div>
                <div id='postTemplate'>
                  {postArray.map((postObj,i) => 
                    <PostTemplate key={i} description={postObj.description} images={postObj.pictures}/>
                  )}
                </div>
            </div>

        </div>
      );
    }
  

  export default Post