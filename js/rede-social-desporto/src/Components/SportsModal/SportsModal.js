import React from "react";
import './SportsModal.css'
import {MdSportsTennis} from 'react-icons/md'
import {sport} from "../../Model/Model"
import CreateSportsList from "./CreateSportsList";

const SportsModal = (props) => {

const [isLoading, setIsLoading] = React.useState(false);
const [error, setError] = React.useState();
  
const [sportArray, setSport] = React.useState([sport]);

  React.useEffect(() => {
    const makeRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const req =  await fetch("http://localhost:8080/user/3/sports");
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
  },[]);


      return (
        <div>
            <div>
                <a id="activateModal" href="#demo-modal"><b><MdSportsTennis></MdSportsTennis> Desportos</b></a>
            </div>
            
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Desportos</h1>
                    <ul id="Sports" >
                        {sportArray.map((sportObj,i) => 
                            <CreateSportsList otherProfile={props.otherProfile} key={i} sportName={sportObj.name} sportId={sportObj.id}></CreateSportsList>
                        )}
                    </ul>
                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }

  export default SportsModal