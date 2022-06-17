import React from "react";
import './NavLog.css'
import { FaSortDown, FaUserAlt } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import LogOutOAuth from './LogOutOAuth';
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