import React from "react";
import './SportsModal.css'
import {MdSportsTennis} from 'react-icons/md'
import {sport} from "../../Model/Model"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSportsList from "./CreateSportsList";

const SportsModal = (props) => {

  function deleteSport(id){
    props.deleted(id)
    setDeleteSport(id)
  }

const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
const [sportArray, setSport] = React.useState([sport]);
const [sportDeleted, setDeleteSport] = React.useState(0);
const {getAccessTokenSilently,user} = useAuth0();

const email = props.otherProfile ? window.location.href.split('/')[4] : user.email.split("@")[0]

  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const token = await getAccessTokenSilently();
          const myHeaders = new Headers()
          myHeaders.append('Authorization',`Bearer ${token}`)
          const options = {
            method: "GET",
            headers: myHeaders,
            mode: 'cors',
        };
        const req =  await fetch(`http://localhost:8080/user/sports?email=${email}`,options);
        const resp = await req.json();
        setSport(resp);
        
      } catch (err) {
        setError(err);
        //console.log(err);
      } finally {
        setIsLoading(false);
        
      }
    };

    if (!isLoading) makeRequest();
  },[sportDeleted,props.edit]);


      return (
        <div>
        {/*

        Copyright (c) 2022 - Tiago Alves - https://codepen.io/denic/pen/ZEbKgPp

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
            <div>
                <a id="activateModal" href="#demo-modal"><b><MdSportsTennis></MdSportsTennis> Sports</b></a>
            </div>
            
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Sports</h1>
                    <ul id="Sports" >
                        {sportArray.map((sportObj,i) => 
                            <CreateSportsList deleteSport={deleteSport} otherProfile={props.otherProfile} key={i} sportName={sportObj.name} sportId={sportObj.id}></CreateSportsList>
                        )}
                    </ul>
                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default SportsModal