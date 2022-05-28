import React from "react";
import  './CommentModal.css'
import MakeComment from "../MakeComment/MakeComment";
import {comment} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";
import {RiArrowDownSFill} from 'react-icons/ri'
import PagingText from "../../../Paging/PagingText";

const CommentModal = (props) => {

  const setNewLimit = (newLimit) => {
    setLimit(newLimit)
  }

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [commentArray, setComment] = React.useState([comment]);
    const [limit, setLimit] = React.useState(10);
    const {getAccessTokenSilently} = useAuth0();

      // Keep the above values in sync, this will fire
      // every time the component rerenders, ie when
      // it first mounts, and then when any of the above
      // values change
      React.useEffect(() => {
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
                body:JSON.stringify(data)
            };
            const req =  await fetch(`http://localhost:8080/user/${window.name}/post/${props.key}/comment?limit=?${limit}`,options);
            const resp = await req.json();
            setComment(resp);
          } catch (err) {
            setError(err);
            //console.log(err);
          } finally {
            setIsLoading(false);
            
          }
        };
    
        if (!isLoading) makeRequest();
      },[limit]);

      return (
        <div id="modalComment">
            <div>
                <a id="activateModal_Comment" href="#comment-modal" className = 'commentBtn'> <RiArrowDownSFill/> Show all the comments ...</a>
            </div>
            
            <div id="comment-modal" className="modalComment">
                <div className="modal__content_Comment">
                    <a href="#" className="modal__close">&times;</a>
                    <h2>Comments</h2>
                    <MakeComment/>
                    {commentArray.map((commentObj,i) => 
                        <div id="comment_body">
                            <div id="leftSideComment">
                                <img img id='userPost' src={require('../images/default_profile.jpg')}></img>
                            </div>
                            <div id="rightSideComment">
                                <h5 id="nameComment">Name Lname</h5>
                                <p id="comment">vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
                            </div>    
                        </div>
                    )}
                    <PagingText limit={limit} setNewLimit={setNewLimit}/>
                </div>
            </div>
        </div>

      );
  }

  export default CommentModal