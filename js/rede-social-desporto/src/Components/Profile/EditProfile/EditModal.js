import React from 'react';
import './EditModal.css'
import {MdEdit} from 'react-icons/md'


class EditModal extends React.Component {
  
    render() {
      return (
          
        <div>
            <a href='#demo-modal' className='anchorBtn'><MdEdit></MdEdit></a>
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Edição Perfil</h1>
                    <form id='editForm'>
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
                                <div claclassNamess="button r" id="button">
                                <input type="checkbox" className="checkbox" value={'yes'}/>
                                <div className="knobs"></div>
                                <div className="layer"></div>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='editDiv'>
                            <input type={'submit'} value='Editar' id='subEdit'></input>
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