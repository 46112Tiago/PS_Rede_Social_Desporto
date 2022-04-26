import './App.css';
import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navigation from './Components/Navigation/Navigation';
import SearchBar from './Components/SearchBar/SearchBar';
import NavLog from './Components/Navigation/NavLog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map';
import Events from './Components/Events/Events';
import SignUp from './Components/Sign_Up/Sign_Up';
import LogIn from './Components/LogIn/LogIn';
import Contacts from './Components/Contacts/Contacts';
import Profile from './Components/Profile/StaticProfile/StaticProfile';
import ProfileSearch from './Components/ProfileSearch/ProfileSearch';
import UserEvent from './Components/UserEvents/UserEvent';
import OthersProfile from './Components/OthersProfile/OthersProfile';
import Friends from './Components/Friends/Friends';

class App extends Component {

  render(){
    return(
      <Router>
        <div className="App">       
          <NavLog></NavLog>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/map' element={<Map></Map>}></Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/logIn' element={<LogIn></LogIn>}></Route>
            <Route path='/contacts' element={<Contacts></Contacts>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/profileSearch' element={<ProfileSearch></ProfileSearch>}></Route>
            <Route path='/userEvents' element={<UserEvent></UserEvent>}></Route>
            <Route path='/profile/:id' element={<OthersProfile></OthersProfile>}></Route>
            <Route path='/friends' element={<Friends></Friends>}></Route>

          </Routes>

          <Footer/>
        </div>
      </Router>
      );
  };
} export default App;
