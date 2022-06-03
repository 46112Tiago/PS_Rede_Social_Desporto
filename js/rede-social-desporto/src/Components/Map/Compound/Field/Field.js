import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { convertToFieldArray } from '../../../../Functions/Functions';
import './Field.css'

const Field = (props) => {

      // get functions to build form with useForm() hook
  const { register, handleSubmit } = useForm();
  const myHeaders = new Headers()
  myHeaders.append('Content-Type','application/json')
  let fieldIndex = 0

    function submit() {
        const fields = document.getElementsByClassName('field')
        const returnFields = convertToFieldArray(fields)
        props.getFields(returnFields)
    }

    function addField() {
        let div = document.createElement('div')
        let label = document.createElement('label')
        label.innerHTML = "Name:"
        let input = document.createElement('input')
        input.type = "text"
        input.className = "field"
        input.placeholder = "Field Name"
        input.name = "fieldName"
        div.style.marginBottom = "20px"
        div.appendChild(label)
        div.appendChild(input)
        document.getElementById('formConatinerCompound').appendChild(div)
    }

      return (
        <div>
                <h3>Add Fields</h3>
                <form  id='formParticipant'>
                <div  id='formConatinerCompound'>
                </div>
                <input type={'button'} id='addFields' onClick={addField} value={`+`}></input>
                <div id='participantbtn'>
                    <input type={'submit'} id='addParticipant' value={'Save'} onClick={handleSubmit(submit)}/>
                </div>
            </form>
        </div>

      );
    }

  export default Field