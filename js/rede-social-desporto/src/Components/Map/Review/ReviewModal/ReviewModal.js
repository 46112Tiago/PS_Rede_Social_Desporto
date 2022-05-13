import React from "react";
import  './ReviewModal.css'
import Makereview from "../MakeReview/MakeReview";
import {review} from '../../../../Model/Model'

const ReviewModal = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [reviewArray, setReview] = React.useState([review]);
    
      // Keep the above values in sync, this will fire
      // every time the component rerenders, ie when
      // it first mounts, and then when any of the above
      // values change
      React.useEffect(() => {
        const makeRequest = async () => {
          setError(null);
          setIsLoading(true);
          try {
            const req =  await fetch(`http://localhost:8080/compound/1/review`);
            const resp = await req.json();
            setReview(resp);
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
        <div id="modalReview">
            <h2>Reviews</h2>
            <MakeReview/>
            {reviewArray.map((reviewObj,i) => 
                <div id="review_body">
                    <div id="leftSideReview">
                        <img img id='userPost' src={require('../images/default_profile.jpg')}></img>
                    </div>
                    <div id="rightSideReview">
                        <h5 id="nameReview">Name Lname</h5>
                        <p id="review">vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
                    </div>    
                </div>
            )}
        </div>
      );
  }

  export default ReviewModal