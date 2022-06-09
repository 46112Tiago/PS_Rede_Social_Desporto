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
            <div id="marker-modal" className="modal_marker">
                <div className="modal__content_marker">                   
                <a href="#" className="modal__close" onClick={()=>{
                      document.getElementById('compoundInfo').checked=false
                      document.getElementById('fields').checked=false
                      document.getElementById('materials').checked=false
                      document.getElementById('schedule').checked=false
                      document.getElementById('reviews').checked=false
                      setComponent(<></>)
                      
                      }}>&times;</a>                    <div className="radio" id="modalCheck" >
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