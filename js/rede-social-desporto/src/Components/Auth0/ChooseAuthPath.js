import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const userId = 0 

const ChooseAuthPath = () => {
  

    
        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenWithPopup,getAccessTokenSilently} = useAuth0();

          const [userArray, setUser] = useState([{}]);

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
                  
                  setUser(response.data);
                }

              } catch (e) {
                alert(e);
              }
            })();
          }, [getAccessTokenSilently]);

          if (!userArray) {
            return <div>Loading...</div>;
          }
        
          return isAuthenticated && (
            <div>
                <h1>Back</h1>
                <h2>{userArray[0].city}</h2>
            </div>
          );
        }   

  export default ChooseAuthPath