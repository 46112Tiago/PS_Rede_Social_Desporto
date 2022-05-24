import React from "react";
import { useForm } from "react-hook-form";
import './CompoundModal.css'
import CompoundSuggestion from "./CompoundSuggestion/CompoundSuggestion";
import Materials from "./Materials/Materials";
import Schedule from "./Schedule/Schedule";
import './Confirm/ConfirmCompound.css'

const CompoundModal = () => {

  const [component, setComponent] = React.useState(<CompoundSuggestion/>);
  const [scheduleObj, setSchedule] = React.useState({});
  const [materialObj, setMaterials] = React.useState({});
  const [compoundObj, setCompound] = React.useState({});


  const getSchedule = (schedule) => {
    setSchedule(schedule)
  }

  const getMaterials = (material) => {
    setMaterials(material)
  }

  const getCompound = (compoundInfo) => {
    setCompound(compoundInfo)
  }

  React.useEffect(() => {

  },[component]);

        // get functions to build form with useForm() hook
        const { register, handleSubmit } = useForm();
        const myHeaders = new Headers()
        myHeaders.append('Content-Type','application/json')
      
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