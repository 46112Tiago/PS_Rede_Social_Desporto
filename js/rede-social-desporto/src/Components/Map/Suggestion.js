import CompoundModal from "./Compound/CompoundModal"
import FieldModal from "./FieldModal/FieldModal"


const Suggestion = (props) => {

    
    return(
        <div id='suggestion'>
            <h2 id='suggestionTxt'>Suggestions:</h2>
            <br/>
            <div id='suggestionBtn'>
              <div id='suggestionBtns'>
                <CompoundModal map={props.map}></CompoundModal>
                <FieldModal map={props.map}></FieldModal>
              </div>
            </div>
        </div>
    )}

export default Suggestion
  