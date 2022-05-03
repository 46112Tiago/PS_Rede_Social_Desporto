import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Fetch = (props) => {
    const {getAccessTokenSilently} = useAuth0();

    const accessToken = getAccessTokenSilently().then( res => {
          console.log(res);
          fetch(`http://localhost:8080/user/3`,
          {
            mode:'no-cors',
              headers: {
                'Content-type': 'application/json',
                  'Authorization' : `Bearer ${res}`,
              },

          })
  }).then(
      res => {
              if(res){
                  return res.ok ? res.json() : window.location.replace('/')
              }/*
              else {
                  window.location.replace('/')
              }*/
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