import React from "react";
import './SportsModal.css'
import {MdSportsTennis} from 'react-icons/md'
import {sport} from "../../Model/Model"
import { useAuth0 } from "@auth0/auth0-react";
import CreateSportsList from "./CreateSportsList";

const SportsModal = (props) => {

  function deleteSport(id){
    setDeleteSport(id)
  }

const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
const [sportArray, setSport] = React.useState([sport]);
const [sportDeleted, setDeleteSport] = React.useState(0);
const {getAccessTokenSilently} = useAuth0();
const userId = props.otherProfile ? window.location.href.split('/')[4][0] : window.name

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
        const req =  await fetch(`http://localhost:8080/user/${userId}/sports`,options);
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
  },[sportDeleted]);


      return (
        <div>
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