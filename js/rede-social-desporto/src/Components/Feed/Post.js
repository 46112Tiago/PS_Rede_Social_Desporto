import React from 'react';
import './Post.css'
import CreatePost from './CreatePost/CreatePost';
import PostTemplate from './PostTemplate/PostTemplate';
import { api_url, post } from '../../Model/Model';
import { useAuth0 } from "@auth0/auth0-react";

const Post = (props) => {

  const getPost = (data) => {
    setPostId(data)
  }

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();  
  const [postArray, setPost] = React.useState([post]);
  const [postId, setPostId] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const {getAccessTokenSilently,user} = useAuth0();

    // Keep the above values in sync, this will fire
    // every time the component rerenders, ie when
    // it first mounts, and then when any of the above
    // values change
    React.useEffect(() => {

      /*
        Based on https://stackoverflow.com/questions/5527296/how-can-i-detect-scroll-end-of-the-specified-element-by-javascript      08/06/2022
      */

      document.getElementById('postContent').onscroll =
        
        function()
        {
          var scrollTop = document.getElementById('postContent').scrollTop;
          var offsetHeight = document.getElementById('postContent').offsetHeight;
          if(offsetHeight*(page+1) < scrollTop){
            setPage(page+1)
          }       
        }     

      const makeRequest = async () => {
        setError(null);
        setIsLoading(true);
        try {
          const token = await getAccessTokenSilently();
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
                method: "GET",
                headers: myHeaders,
                mode: 'cors',
          };
          const email = user.email.split("@")[0]
          const req =  await fetch(`${api_url}/user/post?page=${page}&email=${email}`,options);
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
    },[page,postId]);
  

      return (
        <div id='feed'>
            <div id='postContent'>
                <div id='createPostComponent'>
                    <CreatePost postId={getPost}></CreatePost>
                </div>
                <div id='postTemplate'>
                  {postArray.map((postObj,i) => {
                    if(postObj.id != 0) {
                      return(
                        <>
                          <PostTemplate key={i} post={postObj} images={postObj.pictures}/>
                        </>
                      )
                    }
                  }
                )}
                </div>
            </div>

        </div>
      );
    }
  

  export default Post