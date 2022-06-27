import './App.css';
import React from "react";
/*
MIT License

Copyright (c) React Training 2015-2019 Copyright (c) Remix Software 2020-2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
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
import FriendsRadio from './Components/Friends/FriendsRadio';

const App = () => {

    const { isLoading, isAuthenticated, logout  } = useAuth0()
    const navBar = isAuthenticated ? <NavLog/> : <Navigation/>

    if(isAuthenticated && !sessionStorage.getItem('login')){
      logout({ returnTo: window.location.origin })
    }

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
            <Route path={!window.name ? '/signUp' : '/profile'} element={!window.name ? <CreateUser></CreateUser> : <Profile></Profile>}></Route>
            <Route path='/logIn' element={<LogIn></LogIn>}></Route>
            <Route path='/profile' element={isAuthenticated  ?<Profile></Profile>:<LogIn/>}></Route>
            <Route path='/profileSearch' element={isAuthenticated  ?<ProfileSearch></ProfileSearch>:<LogIn/>}></Route>
            <Route path='/userEvents' element={isAuthenticated  ?<UserEvent></UserEvent>:<LogIn/>}></Route>
            <Route path='/profile/:email' element={isAuthenticated  ?<OthersProfile></OthersProfile>:<LogIn/>}></Route>
            <Route path='/friends' element={isAuthenticated  ?<FriendsRadio></FriendsRadio>:<LogIn/>}></Route>
            <Route path='/groups' element={isAuthenticated  ?<Groups></Groups>:<LogIn/>}></Route>
            <Route path='/friendsMessage' element={isAuthenticated  ?<FriendsMessage></FriendsMessage>:<LogIn/>}></Route>
            <Route path='/feed' element={isAuthenticated  ?<Post></Post>:<LogIn/>}></Route>
            <Route path='/lookingForPlayers' element={isAuthenticated  ?<LookingBody></LookingBody>:<LogIn/>} ></Route>
          </Routes>
          <Footer/>
          </div>
      </Router>
      );
  };

   export default App;
