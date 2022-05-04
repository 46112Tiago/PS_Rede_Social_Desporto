import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Fetch from './Fetch';

const ChooseAuthPath = () => {
  

    
        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenSilently, getAccessTokenWithPopup} = useAuth0();

          const [posts, setPosts] = useState(null);
          const myHeaders = new Headers()

          useEffect(() => {
            (async () => {
              try {
                const token = await getAccessTokenWithPopup();
                myHeaders.append('Authorization', `Bearer ${token}`)

                const response = await fetch('http://localhost:8080/user', {
                  headers: myHeaders
                });
                
                setPosts(await response.json());
              } catch (e) {
                console.error(e);
              }
            })();
          }, [getAccessTokenSilently]);

          if (!posts) {
            return <div>Loading...</div>;
          }
        
          return isAuthenticated && (
            <div>
                <h1>Back</h1>
            </div>
          );
        }   

  export default ChooseAuthPath