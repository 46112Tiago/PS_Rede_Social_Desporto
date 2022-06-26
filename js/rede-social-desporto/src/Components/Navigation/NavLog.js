import React from "react";
import './NavLog.css'
import { FaSortDown, FaUserAlt } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import LogOutOAuth from './LogOutOAuth';

/*
MIT License

Copyright (c) React Training 2015-2019 Copyright (c) Remix Software 2020-2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { Link } from "react-router-dom";


const NavLog = () => {

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown != null && myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
 
      return (
        <div className="navbar">
            <Link className="leftSide" to="/feed">Feed</Link>
            <Link className="leftSide" to="/map">Map</Link>
            <Link className="leftSide" to="/events">Events</Link>

            <div className="dropdown">
                <button className="dropbtn " onClick={myFunction}><FaSortDown className="rightSide"></FaSortDown></button>
                <div className="dropdown-content" id="myDropdown">
                    <Link to="/profile"><FaUserAlt></FaUserAlt> Profile</Link>
                    <Link to="/groups"><BsChatDotsFill></BsChatDotsFill> Contacts</Link>
                    <Link to="/profileSearch"><BiSearchAlt></BiSearchAlt> Search</Link>
                    <LogOutOAuth></LogOutOAuth>
                </div>
            </div> 
        </div>
      );
    }
  

  export default NavLog