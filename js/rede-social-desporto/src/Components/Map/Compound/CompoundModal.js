import React from "react";
import './CompoundModal.css'

class CompoundModal extends React.Component {

    render() {
      return (
        <div className="modalCompoundBody">
            <div className="modalCompoundBody">
              <span id="spanCompound" className="spanbtn"><a id="activateModal_compound" href="#demo-modal" className='btnSug'></a></span>
            </div>
            
            <div id="demo-modal" className="modal_compound">
                <div className="modal__content_compound">                   
                    <a href="#" className="modal__close">&times;</a>
                </div>

            </div>
        </div>

      );
    }
  }

  export default CompoundModal