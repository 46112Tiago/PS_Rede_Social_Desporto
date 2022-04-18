import React from 'react';
import './EditModal.css'

class EditModal extends React.Component {
  
    render() {
      return (
          
        <div>
            <a href='#demo-modal' className='anchorBtn'>Editar</a>
            <div id="demo-modal" class="modal">
                <div class="modal__content">
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
                        <div class="toggle-button-cover">
                                <div class="button r" id="button">
                                <input type="checkbox" class="checkbox" value={'yes'}/>
                                <div class="knobs"></div>
                                <div class="layer"></div>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='editDiv'>
                            <input type={'submit'} value='Editar' id='subEdit'></input>
                        </div>
                    </form>

                <a href="#" class="modal__close">&times;</a>
                </div>
            </div>
        </div>
      );
    }
  }

  export default EditModal