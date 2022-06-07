import React from "react";
import  './CommentModal.css'
import MakeComment from "../MakeComment/MakeComment";
import {comment} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";
import {RiArrowDownSFill} from 'react-icons/ri'
import PagingText from "../../../Paging/PagingText";
import Comments from "./Comments";

const CommentModal = (props) => {

  const setNewPage = (pageN) => {
    setPage(pageN)
  }

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [commentArray, setComment] = React.useState([comment]);
    const [page, setPage] = React.useState(0);
    const [paging, setPaging] = React.useState(<PagingText page={page} setNewPage={setNewPage}/>)
    const {getAccessTokenSilently} = useAuth0();

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
          };
          const req =  await fetch(`http://localhost:8080/user/${window.name}/post/${props.postId}/comment?page=${page}`,options);
          const resp = await req.json();
          resp.length%5 == 0 ?
          setPaging(<PagingText page={page} setNewPage={setNewPage}/>)
          :
          setPaging(<></>)
          const newCommentArray = commentArray.concat(resp)
          setComment(newCommentArray);
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
          
        }
      };
  
      if (!isLoading) makeRequest();
    },[page]);

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
            const req =  await fetch(`http://localhost:8080/user/${window.name}/post/${props.postId}/comment?page=${page}`,options);
            const resp = await req.json();
          } catch (err) {
            setError(err);
            //console.log(err);
          } finally {
            setIsLoading(false);
            
          }
        };


      return (
        <div id="modalComment">
            <div>
                <a id="activateModal_Comment" href={`#comment-modal${props.postId}`} className='commentBtn' onClick={makeRequest}> <RiArrowDownSFill/> Show all the comments ...</a>
            </div>
            
            <div id={`comment-modal${props.postId}`} className="modalComment">
                <div className="modal__content_Comment">
                    <a href="#" className="modal__close">&times;</a>
                    <h2>Comments</h2>
                    <MakeComment/>
                    {commentArray.map((commentObj,i) => {
                      if(commentObj.id != 0) {
                        return(
                          <Comments key={i} firstName={commentObj.user.firstName} lastName={commentObj.user.lastName} comment={commentObj.comment}></Comments>
                        )
                      }
                    }
                    )}
                  {paging}
                </div>
            </div>
        </div>

      );
  }

  export default CommentModal