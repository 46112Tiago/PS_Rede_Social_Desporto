import React from 'react';

const DeleteGroup = () => {

  function submit() {

    const options = {
        method: "DELETE",
        mode: 'cors',
    };

    fetch('http://localhost:8080/group/1/user/1', options)
    .then(response => response.json())
    .then(data => console.log(data));
}

      return (
        <>  
            <div >
                <a onClick={submit}>Erase Group</a>
            </div>
        </>

      );
    }
  export default DeleteGroup