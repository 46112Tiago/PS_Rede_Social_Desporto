import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Fetch = (props) => {

          console.log(props.token)
          const myHeaders = new Headers()
          myHeaders.append("Access-Control-Allow-Headers", "Authorization")
          myHeaders.append("Authorization" , `Bearer ${props.token}`)
            fetch(`http://localhost:8080/user`, {
              headers:myHeaders,
              method:'GET'
            })
            .then(
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
    console.error(e)
  );

    return (
        <div>

        </div>
    );

}
        

  export default Fetch