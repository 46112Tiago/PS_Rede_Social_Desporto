import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useAuth0 } from "@auth0/auth0-react";

import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map';
import Events from './Components/Events/Events';
import CreateUser from './Components/Sign_Up/CreateUser';
import LogIn from './Components/LogIn/LogIn';
import Profile from './Components/Profile/StaticProfile/StaticProfile';
import ProfileSearch from './Components/ProfileSearch/ProfileSearch';
import UserEvent from './Components/UserEvents/UserEvent';
import OthersProfile from './Components/OthersProfile/OthersProfile';
import Friends from './Components/Friends/Friends';
import FriendsMessage from './Components/Contacts/Friends/Friends';
import Groups from './Components/Contacts/Groups/Groups';
import Post from './Components/Feed/Post';
import LookingBody from './Components/Looking/ManagementLooking/LookingBody';
import ChooseAuthPath from './Components/Auth0/ChooseAuthPath';
import Loading from './Components/Loading/Loading';
import NavLog from './Components/Navigation/NavLog';

const App = () => {

    const { isLoading, isAuthenticated  } = useAuth0()
    const navBar = isAuthenticated ? <NavLog/> : <Navigation/>
    if(isLoading){
      return <Loading />
    }

    return(
      <Router>
        <div className="App">       
          {navBar}
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/map' element={<Map></Map>}></Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/signUp' element={<CreateUser></CreateUser>}></Route>
            <Route path='/logIn' element={<LogIn></LogIn>}></Route>
            <Route path='/profile' element={isAuthenticated && window.name ?<Profile></Profile>:<LogIn/>}></Route>
            <Route path='/profileSearch' element={isAuthenticated && window.name ?<ProfileSearch></ProfileSearch>:<LogIn/>}></Route>
            <Route path='/userEvents' element={isAuthenticated && window.name ?<UserEvent></UserEvent>:<LogIn/>}></Route>
            <Route path='/profile/:id' element={isAuthenticated && window.name ?<OthersProfile></OthersProfile>:<LogIn/>}></Route>
            <Route path='/friends' element={isAuthenticated && window.name ?<Friends></Friends>:<LogIn/>}></Route>
            <Route path='/groups' element={isAuthenticated && window.name ?<Groups></Groups>:<LogIn/>}></Route>
            <Route path='/friendsMessage' element={isAuthenticated && window.name ?<FriendsMessage></FriendsMessage>:<LogIn/>}></Route>
            <Route path='/feed' element={isAuthenticated && window.name ?<Post></Post>:<LogIn/>}></Route>
            <Route path='/lookingForPlayers' element={isAuthenticated && window.name ?<LookingBody></LookingBody>:<LogIn/>} ></Route>
          </Routes>
          <Footer/>
          </div>
      </Router>
      );
  };

   export default App;
