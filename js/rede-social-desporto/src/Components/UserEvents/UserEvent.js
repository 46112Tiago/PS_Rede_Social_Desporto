import React from 'react';
import './UserEvent.css'
import UserEventParticipating from './UserEventParticipating/UserEventParticipating';
import UserEventCreated from './UserEventCreated/UserEventCreated';

const UserEvent = () => {
  
const [component, setComponent] = React.useState(<UserEventCreated/>);
const [changeComponent, setChange] = React.useState(0);

  React.useEffect(() => {
    console.log(1)
  },[changeComponent]);

      return (
        <div>
        {/*

        The MIT License (MIT)

        Copyright (c) 2022 by Scott Kennedy (https://codepen.io/scottyzen/pen/ZEWYdZm)

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

        */}
          <div className="radio" >
            <input label="Created" type="radio" id="created" name="eventUser" value="created" onChange={() => {
              setChange(1)
              setComponent(<UserEventCreated/>)}} defaultChecked/>
            <input label="Participating" type="radio" id="participating" name="eventUser" value="participating" onChange={() => {
              setChange(2)
              setComponent(<UserEventParticipating/>)}}/>
          </div>
          {component}
        </div>
      );
    }
  

  export default UserEvent