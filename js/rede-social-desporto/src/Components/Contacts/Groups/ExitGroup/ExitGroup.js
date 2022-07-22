import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../../Model/Model';

const ExitGroup = (props) => {

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
    const response = await fetch(`${api_url}/group/${props.groupId}/user?email=${email}`, options)
    if(response.ok)
      props.exit(props.groupId)

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