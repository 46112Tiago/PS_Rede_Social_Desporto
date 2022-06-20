import React from 'react';
import './DeleteSport.css'
import {AiFillDelete} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";

const DeleteSport = (props) => {


  const {getAccessTokenSilently,user} = useAuth0();
  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
    const makeRequest = async () => {

        try {
            const token = await getAccessTokenSilently();
            const myHeaders = new Headers()
            myHeaders.append('Authorization',`Bearer ${token}`)
            const options = {
              method: "DELETE",
              headers: myHeaders,
              mode: 'cors',
            };
            const email = user.email.split("@")[0]
            const response = await fetch(`http://localhost:8080/user/sports/${props.sportId}?email=${email}`, options);
            if (!response.ok) {
              const message = 'Error with Status Code: ' + response.status;
              throw new Error(message);
            }
            props.deleteSport(props.sportId)
          } catch (error) {
            console.log('Error: ' + error);
          }
    };

  return (
    <div>
        <button onClick={makeRequest} id='deletebtn'><AiFillDelete></AiFillDelete></button>
    </div>
  );
}


  export default DeleteSport