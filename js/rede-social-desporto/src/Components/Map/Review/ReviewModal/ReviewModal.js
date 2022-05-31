import React from "react";
import  './ReviewModal.css'
import Makereview from "../MakeReview/MakeReview";
import {review} from '../../../../Model/Model'
import { useAuth0 } from "@auth0/auth0-react";

const ReviewModal = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState();  
    const [reviewArray, setReview] = React.useState([review]);
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
            };

            const req =  await fetch(`http://localhost:8080/compound/${window.localStorage.getItem("compound_id")}/review`,options);
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
            <Makereview/>
            {reviewArray.map((reviewObj,i) => 
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
            )}
        </div>
      );
  }

  export default ReviewModal