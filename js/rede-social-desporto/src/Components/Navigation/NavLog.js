import React from "react";
import './NavLog.css'
import { FaSortDown } from 'react-icons/fa';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

class NavLog extends React.Component {

    render() {
      return (
        <div class="navbar">
            <a className="leftSide" href="/">Home</a>
            <a className="leftSide" href="/map">Mapa</a>
            <a className="leftSide" href="/events">Eventos</a>
            <div className="dropdown">
                <button class="dropbtn " onClick={myFunction}><FaSortDown className="rightSide"></FaSortDown></button>
                <div class="dropdown-content" id="myDropdown">
                    <a href="#">Perfil</a>
                    <a href="#">Definições</a>
                    <a href="#">LogOut</a>
                </div>
            </div> 
        </div>
      );
    }
  }

  export default NavLog