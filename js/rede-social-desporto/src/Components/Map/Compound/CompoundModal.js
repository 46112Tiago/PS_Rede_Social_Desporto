import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './CompoundModal.css'
import CompoundSuggestion from "./CompoundSuggestion/CompoundSuggestion";
import Materials from "./Materials/Materials";
import Schedule from "./Schedule/Schedule";
import './Confirm/ConfirmCompound.css'
import Field from "./Field/Field";
import Sport_Compound from "./Sport_Compound/Sport_Compound";

const CompoundModal = (props) => {

  const getFields = (fields) => {
    console.log(fields)
    setFields(fields)
  }

  const getSchedule = (schedule) => {
    setSchedule(schedule)
  }

  const getMaterials = (material) => {
    setMaterials(material)
  }

  const getSports = (sports) => {
    setSports(sports)
  }

  const getCompound = (compoundInfo) => {
    setCompound(compoundInfo)
  }

  const [component, setComponent] = React.useState(<></>);
  const [scheduleObj, setSchedule] = React.useState([{}]);
  const [materialObj, setMaterials] = React.useState([{}]);
  const [sportsObj, setSports] = React.useState([{}]);
  const [compoundObj, setCompound] = React.useState({});
  const [fields, setFields] = React.useState([{}]);

  React.useEffect(() => {

  },[component]);

        const myHeaders = new Headers()
        myHeaders.append('Content-Type','application/json')
        const {getAccessTokenSilently} = useAuth0();

        async function submit() {
      
          compoundObj.material = materialObj
          compoundObj.schedule = scheduleObj
          compoundObj.fields = fields
          compoundObj.sports = sportsObj
          const token = await getAccessTokenSilently();
          myHeaders.append('Authorization',`Bearer ${token}`)
          if(!compoundObj.location) { 
            alert("Insert a location")
            return
          }

          compoundObj.location = {x:JSON.parse(compoundObj.location).lat, y:JSON.parse(compoundObj.location).lng}
          const options = {
              method: "POST",
              headers: myHeaders,
              mode: 'cors',
              body:JSON.stringify(compoundObj)
          };
      
          const response = fetch('http://localhost:8080/compound', options)
          window.location.href = "#"
      }

      return (
        /*

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

        */

        <div className="modalCompoundBody">
            <div className="modalCompoundBody">
              <span id="spanCompound" className="spanbtn"><a id="activateModal_compound" href="#demo-modal" className='btnSug'></a></span>
            </div>
            
            <div id="demo-modal" className="modal_compound">
                <div className="modal__content_compound">                   
                    <a href="#" className="modal__close">&times;</a>
                    {/*

                    Copyright (c) 2022 - Tiago Alves - https://codepen.io/scottyzen/pen/ZEWYdZm

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
                    <div className="radio" id="modalCheck" >
                      <input label="Information" type="radio" id="information" name="compoundModal" value="information" onChange={() => {setComponent(<CompoundSuggestion map={props.map} getCompound={getCompound}/>)}}/>
                      <input label="Fields" type="radio" id="fields" name="compoundModal" value="fields" onChange={() => {setComponent(<Field getFields={getFields}/>)}} />
                      <input label="Sports" type="radio" id="sports" name="compoundModal" value="sports" onChange={() => {setComponent(<Sport_Compound getSports={getSports}/>)}} />
                      <input label="Materials" type="radio" id="materials" name="compoundModal" value="materials" onChange={() => {setComponent(<Materials getMaterials={getMaterials}/>)}} />
                      <input label="Schedule" type="radio" id="schedule" name="compoundModal" value="schedule" onChange={() => {setComponent(<Schedule getSchedule={getSchedule}/>)}} />
                      {/*

                          Copyright (c) 2022 - Tiago Alves - https://codepen.io/yuhomyan/pen/LYNVVNO

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
                      <input label="Confirm" type="radio" id="confirm" name="compoundModal" value="confirm" onChange={() => {setComponent(<div id='submitCompound'><button onClick={submit} id='submitCompoundBtn'>CONFIRM</button></div>)}} />
                    </div>
                      {component}
                      
                </div>
            </div>
        </div>

      );
    }

  export default CompoundModal