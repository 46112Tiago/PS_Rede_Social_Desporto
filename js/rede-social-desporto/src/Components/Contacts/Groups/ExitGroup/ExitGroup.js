import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const ExitGroup = (props) => {

  const {getAccessTokenSilently} = useAuth0();

  async function submit() {

    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "DELETE",
        mode: 'cors',
        headers: myHeaders 
    };

    const response = await fetch(`http://localhost:8080/group/${props.groupId}/user/${window.name}`, options)
    
}

      return (
        <>  
            <div >
                <a onClick={submit}>Exit</a>
            </div>
        </>

      );
    }
  export default ExitGroup