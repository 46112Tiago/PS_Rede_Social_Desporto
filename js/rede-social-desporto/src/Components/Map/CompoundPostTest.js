import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const CompoundPostTest = () => {

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset } = useForm();

  // user state for form
  const [compound, setCompound] = useState(null);

  // effect runs on component mount
  useEffect(() => {
      // simulate async api call with set timeout
      setTimeout(() => setCompound({ name: '', description: '', summary: '',dressingRoom: '', parking: false  }), 1000);
  }, []);

  // effect runs when user state is updated
  useEffect(() => {
      // reset form with user data
      reset(compound);
  }, [compound]);

  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')

  function submit(data) {


    const options = {
        method: "POST",
        headers: myHeaders,
        mode: 'cors',
        body:JSON.stringify(data)
    };

    fetch('http://localhost:8080/compound', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

  return (
      <div className="card m-3">
          <h5 className="card-header">React Hook Form - Set Form Values in useEffect Example</h5>
          <div className="card-body">
              {compound &&
                  <form onSubmit={handleSubmit(submit)} >
                      <div className="form-row">
                          <div className="form-group col">
                              <label>Name</label>
                              <input name="name" type="text" {...register('name')} className="form-control"></input>
                          </div>
                          <div className="form-group col-5">
                              <label>Description</label>
                              <input name="description" type="text" {...register('description')} className="form-control" />
                          </div>
                          <div className="form-group col-5">
                              <label>Summary</label>
                              <input name="summary" type="text" {...register('summary')} className="form-control" />
                          </div>
                          <div className="form-group col-5">
                                <label>Dressing Room</label>
                                <select name="dressingRoom" {...register('dressingRoom')} className="form-control">
                                    <option value="A">A</option>
                                    <option value="N">N</option>
                                </select>
                          </div>
                          <div className="form-group col-5">
                              <label>Parking</label>
                              <input name="parking" type='checkbox' {...register('parking')} className="form-control" />
                          </div>
                      </div>
                      <div className="form-group">
                          <button type="submit" className="btn btn-primary mr-1">Submit</button>
                          <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                      </div>
                  </form>
              }
              {!compound &&
                  <div className="text-center p-3">
                      <span className="spinner-border spinner-border-lg align-center"></span>
                  </div>
              }
          </div>
      </div>
  );
}


  export default CompoundPostTest