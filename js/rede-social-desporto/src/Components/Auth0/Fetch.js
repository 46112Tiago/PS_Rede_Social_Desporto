import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Fetch = (props) => {
    const {getAccessTokenSilently} = useAuth0();
    
    /*
    const accessToken = getAccessTokenSilently({
        audience: `https://localhost:8080`,
      }).then(
        res => {
            console.log(res.accessToken);
            fetch(`}`,
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
    });
*/
  
    useEffect(() => {
      (async () => {
        try {
          const token = await getAccessTokenSilently({
            audience: 'https://api.example.com/',
          });
          const response = await fetch(`http://localhost:8080/user/${props.userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const cookie = await response.json();
          document.cookie = `userId = ${cookie.userId}`
          alert(props.email)

        } catch (e) {
          console.error(e.error);
        }
      })();
    }, [getAccessTokenSilently]);




    return (
        <div>

        </div>
    );

}
        

  export default Fetch