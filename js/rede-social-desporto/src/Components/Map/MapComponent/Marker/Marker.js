import React from "react";
import './Marker.css'
import ReviewModal from "../../Review/ReviewModal/ReviewModal";

const Marker = () => {

  const [component, setComponent] = React.useState(<></>);

  React.useEffect(() => {

  },[component]);

      return (
            <div id="marker-modal" className="modal_marker">
                <div className="modal__content_marker">                   
                    <a href="#" className="modal__close">&times;</a>
                    <div className="radio" id="modalCheck" >
                      <input label="Info" type="radio" id="compoundInfo" name="markerModal" value="information" onChange={() => {setComponent(<></>)}} defaultChecked />
                      <input label="Fields" type="radio" id="fields" name="markerModal" value="fields" onChange={() => {setComponent(<></>)}}  />
                      <input label="Materials" type="radio" id="materials" name="markerModal" value="materials" onChange={() => {setComponent(<></>)}}  />
                      <input label="Schedule" type="radio" id="schedule" name="markerModal" value="schedule" onChange={() => {setComponent(<></>)}}  />
                      <input label="Reviews" type="radio" id="reviews" name="markerModal" value="reviews" onChange={() => {setComponent(<ReviewModal></ReviewModal>)}}  />
                    </div>
                      {component}
                    
                </div>
            </div>
      );
    }

  export default Marker