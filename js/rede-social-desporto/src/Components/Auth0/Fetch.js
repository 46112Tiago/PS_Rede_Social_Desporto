import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Fetch = (props) => {
    const {getAccessTokenSilently} = useAuth0();
    

    const accessToken = getAccessTokenSilently({
        audience: `http://localhost:8080`,
      }).then( res => {
            console.log(res.accessToken);
            fetch(`http://localhost8080/user/3`,
            {
                headers: {
                    Authorization : `Bearer ${res.accessToken}`
                },

            })
    }).then(
        res => {
                if(res.ok){
                    return res.json()
                }
                else {
                    window.location.replace('/')
                }
            }
    ).then(res => {
         document.cookie = `userId = ${res.userId}`
        alert(props.email)
    }).catch( e =>
      console.log(e)
    );

    return (
        <div>

        </div>
    );

}
        

  export default Fetch