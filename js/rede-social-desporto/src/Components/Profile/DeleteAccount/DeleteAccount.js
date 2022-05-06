import React from 'react';
import './DeleteAccount.css'
import {AiFillDelete} from 'react-icons/ai'

const DeleteAccount = () => {

    const deleteMethod = {
        method: 'delete',
        mode: 'cors'
    }

  // Keep the above values in sync, this will fire
  // every time the component rerenders, ie when
  // it first mounts, and then when any of the above
  // values change
    const makeRequest = async () => {
        const confirmation = window.confirm("Are you sure you want to delete your account ?")
        if(confirmation){
            try {
                const response = await fetch(`http://localhost:8080/user/1`, deleteMethod);
                if (!response.ok) {
                  const message = 'Error with Status Code: ' + response.status;
                  throw new Error(message);
                }
                const data = await response.json();
                console.log(data);
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