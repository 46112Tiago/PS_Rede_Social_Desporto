import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../../Model/Model';

const DeleteGroup = (props) => {
  const {getAccessTokenSilently,user} = useAuth0();
  async function submit() {


    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "DELETE",
        mode: 'cors',
        headers: myHeaders 
    };
    const email = user.email.split("@")[0]
    const response = await fetch(`${api_url}/user/group/${props.groupId}?email=${email}`, options)
    if(response.ok)
      props.delete(props.groupId)
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