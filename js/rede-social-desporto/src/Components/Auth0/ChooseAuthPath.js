import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const ChooseAuthPath = () => {
  


        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenSilently} = useAuth0();
        const navigate = useNavigate();

          useEffect(async () => {
                
            const token = await getAccessTokenSilently();

            if(isAuthenticated) {

              const headers = new Headers()
              headers.append('Authorization',`Bearer ${token}`)
              var options = {
                    method: 'GET',
                    headers: {headers}
                  };
                  
                  const response = await fetch(`http://localhost:8080/user?email=${user.email}`,options);
                  if(response.status != 200){
                    navigate("/signUp");
                  }
                }
            
          }, []);
        
          return  (
            <></>
          );
        }   

  export default ChooseAuthPath