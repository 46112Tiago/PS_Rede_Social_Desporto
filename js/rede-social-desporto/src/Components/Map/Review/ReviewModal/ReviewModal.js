import React from "react";
import  './ReviewModal.css'
import Makereview from "../MakeReview/MakeReview";
import {api_url, review} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";
import PagingText from "../../../Paging/PagingText";

const ReviewModal = (props) => {

  const setNewPage = (pageN) => {
    setPage(pageN)
  }

  const newReviewProp = (data) => {
    setNewReviewChange(true)
    setNewReview(data)
  }

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [reviewArray, setReview] = React.useState([review]);
    const [page, setPage] = React.useState(0);
    const [newReview, setNewReview] = React.useState(0);
    const [newReviewChange, setNewReviewChange] = React.useState(false);
    const [end, setEnd] = React.useState(false);
    const [paging, setPaging] = React.useState(<PagingText page={page} setNewPage={setNewPage}/>)
    const {isAuthenticated} = useAuth0();
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
            const myHeaders = new Headers()
            if (isAuthenticated) {
              const token = await getAccessTokenSilently();
              myHeaders.append('Authorization',`Bearer ${token}`)
            }

            const options = {
                method: "GET",
                headers: myHeaders,
                mode: 'cors',
          };
            if(end){
              const req =  await fetch(`${api_url}/compound/${window.localStorage.getItem("compound_id")}/review/${newReview}`,options);
              const resp = await req.json();
              const newReviewArray = reviewArray.concat(resp)
              setReview(newReviewArray);
              return    
            }
            if(!newReviewChange){
              const req =  await fetch(`${api_url}/compound/${window.localStorage.getItem("compound_id")}/review?page=${page}`,options);
              const resp = await req.json();
              if(resp.length%5 == 0 && resp.length > 0)
              setPaging(<PagingText page={page} setNewPage={setNewPage}/>)
            else{
              setPaging(<></>)
              setEnd(true)
            }
              const newReviewArray = reviewArray.concat(resp)
              setReview(newReviewArray);
            }
            setNewReviewChange(false)
          } catch (err) {
            setError(err);
            //console.log(err);
          } finally {
            setIsLoading(false);
            
          }
        };
    
        if (!isLoading) makeRequest();
      },[page,newReview]);

      return (
        <div id="modalReview">
            <h2>Reviews</h2>
            {isAuthenticated ? <Makereview newReview={newReviewProp}/> : <></>}
            {reviewArray.map((reviewObj,i) => {
              if(reviewObj.id != 0){
                return(
                  <div id="review_body" key={i}>
                    <div id="leftSideReview">
                        <img img id='userPost' src={require('../images/default_profile.jpg')}></img>
                    </div>
                    <div id="rightSideReview">
                        <h5 id="nameReview">{reviewObj.user ? reviewObj.user.firstName : ''} {reviewObj.user ? reviewObj.user.lastName : ''} </h5>
                        <p id="review">{reviewObj.description}</p>
                        <p>Rating: {reviewObj.rating}</p>
                    </div>    
                  </div>
                )
              }
            }

            )}
            {paging}
        </div>
      );
  }

  export default ReviewModal