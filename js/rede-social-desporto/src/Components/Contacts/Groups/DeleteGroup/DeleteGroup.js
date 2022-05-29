import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const DeleteGroup = (props) => {
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

    const response = await fetch(`http://localhost:8080/user/${window.name}/group/${props.groupId}`, options)
}

      return (
        <>  
            <div >
                <a onClick={submit} id='deleteGroup'>Erase Group</a>
            </div>
        </>

      );
    }
  export default DeleteGroup