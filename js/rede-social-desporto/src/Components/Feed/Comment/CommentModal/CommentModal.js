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

  const setNewCommentProps = (commentId) => {
    setNewCommentChange(true)
    setNewComment(commentId)
  }
    let commentSend = ''
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [commentArray, setComment] = React.useState([comment]);
    const [newComment, setNewComment] = React.useState(0);
    const [newCommentChange, setNewCommentChange] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [modal, setCommentModal] = React.useState(false);
    const [end, setEnd] = React.useState(false);
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
          if(end){
            const req =  await fetch(`http://localhost:8080/user/post/${props.postId}/comment/${newComment}`,options);
            const resp = await req.json();
            const newCommentArray = commentArray.concat(resp)
            setComment(newCommentArray);
            return    
          }
          if(!newCommentChange){
            const req =  await fetch(`http://localhost:8080/user/post/${props.postId}/comment?page=${page}`,options);
            const resp = await req.json();
            if(resp.length%5 == 0 && resp.length > 0)
              setPaging(<PagingText page={page} setNewPage={setNewPage}/>)
            else{
              setPaging(<></>)
              setEnd(true)
            }
            const newCommentArray = commentArray.concat(resp)
            setComment(newCommentArray);
          }
          setNewCommentChange(false)
        } catch (err) {
          setError(err);
          //console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (!isLoading) makeRequest();
    },[page,newComment]);

        const makeRequest = async () => {
          setCommentModal(true)
        };


      return (
        <div id="modalComment">
        {/*

        Copyright (c) 2022 - Tiago Alves - https://codepen.io/denic/pen/ZEbKgPp

        Permission is hereby granted, free of charge, to any person 
        obtaining a copy of this software and associated documentation 
        files (the "Software"), to deal in the Software without restriction,
        including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of 
        the Software, and to permit persons to whom the Software is 
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall 
        be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.

        */}
            <div>
                <a id="activateModal_Comment" href={`#comment-modal${props.postId}`} className='commentBtn' onClick={makeRequest}> <RiArrowDownSFill/> Show all the comments ...</a>
            </div>
            
            <div id={`comment-modal${props.postId}`} className="modalComment">
                <div className="modal__content_Comment">
                    <a href="#" className="modal__close">&times;</a>
                    <h2>Comments</h2>
                    <MakeComment newComment={setNewCommentProps} postId={props.postId}/>
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