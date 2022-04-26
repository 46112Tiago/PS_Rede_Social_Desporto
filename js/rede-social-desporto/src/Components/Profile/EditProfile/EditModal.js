import React from 'react';
import './EditModal.css'
import {MdEdit} from 'react-icons/md'


class EditModal extends React.Component {
  
    render() {
      return (
          
        <div id='editModal'>
            
            <div>
                <a href='#edit-modal' className='anchorBtn'><MdEdit></MdEdit></a>
            </div>
            <div id="edit-modal" className="modalEdit">
                <div className="modal_content_Edit">
                    <h1>Edição Perfil</h1>
                    <form id='editForm' action=''>
                        <label>Cidade:</label>
                        <br/>
                        <input type={'text'}></input>
                        <br/><br/>
                        <label>Desportos:</label>
                        <br/><br/>
                        <fieldset>
                            <label>Basketball</label>
                            <input type={'checkbox'} name="sports" value="Basketball"/>
                            <label>Football</label>
                            <input type={'checkbox'} name="sports" value="Football"/>
                            <label>Tenis</label>
                            <input type={'checkbox'} name="sports" value="Tenis"/>
                            <label>Padel</label>
                            <input type={'checkbox'} name="sports" value="Padel"/>
                        </fieldset>
                        <br/><br/>
                        <label>Available:</label>
                        <br/><br/>
                        <div className="toggle-button-cover">
                                <div className="button r" id="button">
                                <input type="checkbox" className="checkbox" value={'yes'}/>
                                <div className="knobs"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='editDiv'>
                            <input type='submit' value='Editar' id='subEdit'></input>
                        </div>
                    </form>

                <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
        </div>
      );
    }
  }

  export default EditModal