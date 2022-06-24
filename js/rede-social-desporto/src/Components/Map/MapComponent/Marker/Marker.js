import React from "react";
import './Marker.css'
import ReviewModal from "../../Review/ReviewModal/ReviewModal";
import MaterialModal from "../../Compound/Materials/MaterialModal";
import CompoundMarkerModal from "../../Compound/CompoundMarkerModal";
import FieldModal from "../../Compound/Field/FieldModal";
import ScheduleModal from "../../Compound/Schedule/SceduleModal";

const Marker = () => {

  const [component, setComponent] = React.useState(<></>);

  React.useEffect(() => {

  },[component]);

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
            <div id="marker-modal" className="modal_marker">
                <div className="modal__content_marker">                   
                <a href="#" className="modal__close" onClick={()=>{
                      document.getElementById('compoundInfo').checked=false
                      document.getElementById('fields').checked=false
                      document.getElementById('materials').checked=false
                      document.getElementById('schedule').checked=false
                      document.getElementById('reviews').checked=false
                      setComponent(<></>)
                      
                      }}>&times;</a>                    
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
                      <input label="Info" type="radio" id="compoundInfo" name="markerModal" value="information" onChange={() => {setComponent(<CompoundMarkerModal></CompoundMarkerModal>)}}/>
                      <input label="Fields" type="radio" id="fields" name="markerModal" value="fields" onChange={() => {setComponent(<FieldModal></FieldModal>)}}  />
                      <input label="Materials" type="radio" id="materials" name="markerModal" value="materials" onChange={() => {setComponent(<MaterialModal></MaterialModal>)}}  />
                      <input label="Schedule" type="radio" id="schedule" name="markerModal" value="schedule" onChange={() => {setComponent(<ScheduleModal></ScheduleModal>)}}  />
                      <input label="Reviews" type="radio" id="reviews" name="markerModal" value="reviews" onChange={() => {setComponent(<ReviewModal></ReviewModal>)}}  />
                    </div>
                      {component}
                    
                </div>
            </div>
      );
    }

  export default Marker