import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Fetch from './Fetch';

const ChooseAuthPath = () => {
  

    
        const {user, isAuthenticated} = useAuth0()

        
          return isAuthenticated && (
            <div>
                <Fetch userId={1} email={user.email}></Fetch>
                <h1>Back</h1>
            </div>
          );
        }   

  export default ChooseAuthPath