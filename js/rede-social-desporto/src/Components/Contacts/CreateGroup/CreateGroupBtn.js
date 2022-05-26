import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { group } from "../../../Model/Model"
import './CreateGroupBtn.css'

const CreateGroupBtn = () => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();

  // user state for form
  const [groupObj, setGroup] = useState(group);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setGroup({ name: ''}), 1000);
  }, []);



  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {

    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/user/1/group', options)
    .then(response => response.json())
    .then(data => console.log(data));
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