import React from "react";
import './FieldModal.css'
import FieldSuggestion from "./FieldSuggestion/FieldSuggestion";

class FieldModal extends React.Component {

    render() {
      return (
        <div className="modalFieldBody">
            <div className="modalFieldBody">
                <span id="spanField" className="spanbtn"><a id="activateModal_field" href="#field-modal" className='btnSug'></a></span>
            </div>
            
            <div id="field-modal" className="modal_field">
                <div className="modal__content_field">
                    <FieldSuggestion></FieldSuggestion>                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }
  }

  export default FieldModal