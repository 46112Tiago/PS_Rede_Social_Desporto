import React from "react";
import './SportsModal.css'
import DeleteSport from "./DeleteSport/DeleteSport";

const CreateSportsList = (props) => {

      return (
        <div className="listSport">
            <li key={props.key}>
                {props.sportName}
            </li>
            {props.otherProfile ? <></> : <DeleteSport deleteSport={props.deleteSport} sportId={props.sportId}></DeleteSport> }
        </div>
      );
    }

  export default CreateSportsList