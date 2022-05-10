import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Fetch from './Fetch';

const ChooseAuthPath = () => {
  

    
        const {user, isAuthenticated} = useAuth0()
        const {getAccessTokenWithPopup} = useAuth0();

          const [userArray, setUser] = useState([{}]);
          const myHeaders = new Headers()

          useEffect(() => {
            (async () => {
              try {
                const token = await getAccessTokenWithPopup();
                myHeaders.append('Authorization', `Bearer ${token}`)
                myHeaders.append('Content-Type', `application/json`)
                myHeaders.append('Access-Control-Allow-Origin', 'https://localhost:3000');
                myHeaders.append('Access-Control-Allow-Credentials', 'true');
                if(isAuthenticated) {
                  axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
                  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
                  axios.defaults.headers.get['Authorization'] = `Bearer ${token}`
                  const response = await axios.get('http://localhost:8080/user');
                  
                  setUser(response.data);
                }

              } catch (e) {
                alert(e);
              }
            })();
          }, [getAccessTokenWithPopup]);

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