import React from "react";
import '../OthersProfile.css'
import { useAuth0 } from "@auth0/auth0-react";

const AddFriend = (props) => {

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')
  const {getAccessTokenSilently, user} = useAuth0();

  async function friendRequest() {

    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
  };
    const email = user.email.split("@")[0]
    const response = fetch(`http://localhost:8080/user/friend/${props.friendName}?email=${email}`, options)
    props.request(props.friendName)
}


      return (
        <div className="rightProfile" id="rightBtn">
            <button onClick={friendRequest} id="friendRequest">Friend</button>
        </div>
      );
    }
  

  export default AddFriend