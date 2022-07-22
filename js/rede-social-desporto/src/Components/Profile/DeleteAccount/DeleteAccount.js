import React from 'react';
import './DeleteAccount.css'
import {AiFillDelete} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import { api_url } from '../../../Model/Model';

const DeleteAccount = () => {

    const {logout,getAccessTokenSilently,user} = useAuth0()
    const myHeaders = new Headers()

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
    const makeRequest = async () => {
        const confirmation = window.confirm("Are you sure you want to delete your account ?")
        if(confirmation){
            try {
              const token = await getAccessTokenSilently()
              myHeaders.append('Authorization',`Bearer ${token}`)
              const deleteMethod = {
                  method: "DELETE",
                  headers: myHeaders,
                  mode: 'cors',
              };
                const response = await fetch(`${api_url}/user?email=${user.email}`, deleteMethod);
                logout({ returnTo: window.location.origin })
              } catch (error) {
                console.log('Error: ' + error);
              }
        }
        

    };

    return (
      <div >
        <button onClick={makeRequest} id='deleteAccountBtn'><AiFillDelete></AiFillDelete></button>
      </div>
    );
  }

  export default DeleteAccount