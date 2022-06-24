import React from 'react';
import './Friends.css'
import Friends from './Friends';
import FriendsPending from './FriendsPending';

const FriendsRadio = (props) => {

    const [component, setComponent] = React.useState(<Friends/>);
 
   React.useEffect(() => {
 
   },[component]);

      return (
       <>
            {/*

            Copyright (c) 2022 - Tiago Alves - https://codepen.io/scottyzen/pen/ZEWYdZm

            Permission is hereby granted, free of charge, to any person 
            obtaining a copy of this software and associated documentation 
            files (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, 
            merge, publish, distribute, sublicense, and/or sell copies of 
            the Software, and to permit persons to whom the Software is 
            furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall 
            be included in all copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
            WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
            DEALINGS IN THE SOFTWARE.

            */}
        <div className="radio" >
            <input label="Friends" type="radio" id="friends" name="friendsPage" value="friends" onChange={() => {setComponent(<Friends />)}} defaultChecked/>
            <input label="Request" type="radio" id="request" name="friendsPage" value="request" onChange={() => {setComponent(<FriendsPending/>)}}  />
        </div>
        <div>
            {component}
        </div>
       </>
      );
    }

  export default FriendsRadio