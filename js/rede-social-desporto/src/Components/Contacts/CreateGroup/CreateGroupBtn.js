import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { group } from "../../../Model/Model"
import { useAuth0 } from "@auth0/auth0-react";
import './CreateGroupBtn.css'

const CreateGroupBtn = () => {

  const {getAccessTokenSilently,user} = useAuth0();

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [groupObj, setGroup] = useState(group);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setGroup({ name: ''}), 1000);
  }, []);

  async function submit(data) {
    const token = await getAccessTokenSilently();
    const myHeaders = new Headers()
    myHeaders.append('Content-Type','application/json')
    myHeaders.append('Authorization',`Bearer ${token}`)
    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };
    const email = user.email.split("@")[0]
    const response = fetch(`http://localhost:8080/user/group?email=${email}`, options)
    const responseJson = response.json()
    console.log(responseJson)
}

  return (
          <div>
              {groupObj &&
                  <form onSubmit={handleSubmit(submit)}>
                      <h3>Create Group</h3>
                      <div className="form-row">
                          <div className="form-group col">
                              <input name="name" type="text" {...register('name')} className="form-control" placeholder='Group Name' required></input>
                          </div>
                      </div>
                      <div className="form-group">
                          <button type="submit" id='submitGroup'>Submit</button>
                      </div>
                  </form>
              }
          </div>
  );
}


  export default CreateGroupBtn