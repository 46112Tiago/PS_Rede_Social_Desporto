import React, { useEffect } from 'react';

/*

https://github.com/auth0/auth0-react/

MIT License

Copyright (c) 2020 Auth0

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { api_url } from '../../Model/Model';

const ChooseAuthPath = () => {
  

/*

https://github.com/auth0/auth0-react/

        MIT License

        Copyright (c) 2020 Auth0

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.

*/

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
                  
                  const response = await fetch(`${api_url}/user?email=${user.email}`,options);
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