import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../Loading/Loading';

const ChooseAuthPath = () => {
  


        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenSilently} = useAuth0();

          useEffect(() => {
            (async () => {
              try {
                const token = await getAccessTokenSilently();

                if(isAuthenticated) {

                  var options = {
                    method: 'GET',
                    headers: {authorization: `Bearer ${token}`}
                  };
                  
                  const response = await fetch(`http://localhost:8080/user?email=${user.email}`,options);
                  const responseJson = await response.json()
                  console.log(responseJson)
                  if(response.status == 200){
                    window.name = responseJson;
                  }else {
                    window.location.href = '/signUp'
                  }
                }

              } catch (e) {
                alert(e);
              }
            })();
          }, [getAccessTokenSilently]);

          return  (
            <></>
          );
        }   

  export default ChooseAuthPath