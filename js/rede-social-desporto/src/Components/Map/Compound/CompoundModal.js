import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {convertLocationToCoordinate} from '../../../GoogleMaps/Geocoding'
import './CompoundModal.css'
import CompoundSuggestion from "./CompoundSuggestion/CompoundSuggestion";
import Materials from "./Materials/Materials";
import Schedule from "./Schedule/Schedule";
import './Confirm/ConfirmCompound.css'

const CompoundModal = () => {


  const getSchedule = (schedule) => {
    setSchedule(schedule)
  }

  const getMaterials = (material) => {
    setMaterials(material)
  }

  const getCompound = (compoundInfo) => {
    setCompound(compoundInfo)
  }

  const [component, setComponent] = React.useState(<CompoundSuggestion getCompound={getCompound}/>);
  const [scheduleObj, setSchedule] = React.useState([{}]);
  const [materialObj, setMaterials] = React.useState([{}]);
  const [compoundObj, setCompound] = React.useState({});



  React.useEffect(() => {

  },[component]);

        const myHeaders = new Headers()
        myHeaders.append('Content-Type','application/json')
        const {getAccessTokenSilently} = useAuth0();

        async function submit() {
      
          compoundObj.materials = materialObj
          compoundObj.schedule = scheduleObj
          const token = await getAccessTokenSilently();
          myHeaders.append('Authorization',`Bearer ${token}`)
          const geoLocation = await convertLocationToCoordinate(compoundObj.location)
          compoundObj.location = {x:geoLocation.lat, y:geoLocation.lng}
          const options = {
              method: "POST",
              headers: myHeaders,
              mode: 'cors',
              body:JSON.stringify(compoundObj)
          };
      
          const response = fetch('http://localhost:8080/compound', options)
      }

      return (
        <div className="modalCompoundBody">
            <div className="modalCompoundBody">
              <span id="spanCompound" className="spanbtn"><a id="activateModal_compound" href="#demo-modal" className='btnSug'></a></span>
            </div>
            
            <div id="demo-modal" className="modal_compound">
                <div className="modal__content_compound">                   
                    <a href="#" className="modal__close">&times;</a>
                    <div className="radio" id="modalCheck" >
                      <input label="Information" type="radio" id="information" name="compoundModal" value="information" onChange={() => {setComponent(<CompoundSuggestion getCompound={getCompound}/>)}} defaultChecked />
                      <input label="Materials" type="radio" id="materials" name="compoundModal" value="materials" onChange={() => {setComponent(<Materials getMaterials={getMaterials}/>)}} />
                      <input label="Schedule" type="radio" id="schedule" name="compoundModal" value="schedule" onChange={() => {setComponent(<Schedule getSchedule={getSchedule}/>)}} />
                      <input label="Confirm" type="radio" id="confirm" name="compoundModal" value="confirm" onChange={() => {setComponent(<div id='submitCompound'><button onClick={submit} id='submitCompoundBtn'>CONFIRM</button></div>)}} />
                    </div>
                      {component}
                      
                </div>
            </div>
        </div>

      );
    }

  export default CompoundModal