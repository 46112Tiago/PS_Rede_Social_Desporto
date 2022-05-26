import React from "react";
import { useForm } from "react-hook-form";
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
  const [scheduleObj, setSchedule] = React.useState({});
  const [materialObj, setMaterials] = React.useState({});
  const [compoundObj, setCompound] = React.useState({});



  React.useEffect(() => {

  },[component]);

        // get functions to build form with useForm() hook
        const { register, handleSubmit } = useForm();
        const myHeaders = new Headers()
        myHeaders.append('Content-Type','application/json')
        myHeaders.append("Authorization","Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJLb3pWaFZPYmVSbzg3dHRkSU0xdSJ9.eyJpc3MiOiJodHRwczovL2Rldi03eHNpcjNhaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiUEt3R0k2emlaOTNhbnE5YzEzejBwYWV0MG5VYXhxV3VAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTY1MzQxNTk3MSwiZXhwIjoxNjUzNTAyMzcxLCJhenAiOiJQS3dHSTZ6aVo5M2FucTljMTN6MHBhZXQwblVheHFXdSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.PsFFozl4_aHlZcFOD6URGaTAcP2iQM-r4isziQJpHlSbeaIYJeixBd7YpLD19Zrwb3BT7rzPyd_7nTyLy9TC9QfJIeBx0wMlVfs4Gw8b_dstQND4IiWAyW7CnJs3B0Wxh_eyHLxox0MMdQkvdLtUNfCy2scam5hv4SyvnR-bhrMSUicdzC7pVHpoQQ_WU4XpmOxbGO-lszNQgrirxj6ASfWNS7ZdPxU0znuTctThvhhY8jN9y2GV3uW_9SGXWEzxDy8lP8x7v9NCnP-dw7y1G1hGubwxPw0V4jcbTJTEx8-OxTsq0A0zMRcPfbhUY-HkugWTfq-xlpj7X-G8RaHzkw")
      
        function submit() {
      
          compoundObj.materials = materialObj
          compoundObj.schedule = scheduleObj

          const options = {
              method: "POST",
              headers: myHeaders,
              mode: 'cors',
              body:JSON.stringify(compoundObj)
          };
      
          fetch('http://localhost:8080/compound', options)
          .then(response => response.json())
          .then(data => console.log(data));
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