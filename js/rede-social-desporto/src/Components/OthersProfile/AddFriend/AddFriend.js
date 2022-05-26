import React from "react";
import '../OthersProfile.css'

const AddFriend = (props) => {

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function friendRequest() {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
    };

    fetch('http://localhost:8080/user/3/friend/1', options)
    .then(response => response.json())
    .then(data => console.log(data));
}


      return (
        <div className="rightProfile" id="rightBtn">
            <button onClick={friendRequest} id="friendRequest">Friend</button>
        </div>
      );
    }
  

  export default AddFriend