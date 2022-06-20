import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const ChooseAuthPath = () => {
  


        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenSilently} = useAuth0();
        const navigate = useNavigate();

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
                  if(response.status != 200){
                    navigate("/signUp");
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