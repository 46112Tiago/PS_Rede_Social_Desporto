package com.ps.demo.field

import com.ps.data.Field
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.OK
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class FieldController(val fieldService: FieldService) {

    /******************************************  GET  ******************************************/

    /*
        Get all the fields accepted
    */

    @GetMapping("/compound/{compoundId}/field")
    fun getAllFields(@PathVariable("compoundId") compoundId: Int) : ResponseEntity<List<Field>?> {
        val fields : List<Field>? = fieldService.getAllFields(compoundId)
        return ResponseEntity(fields, HttpStatus.OK)
    }

    /*
        Get the field imformation
    */

    @GetMapping("/compound/{compoundId}/field/{fieldId}")
    fun getFieldInfo(@PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any> {
        val field : Optional<Field>? = fieldService.getFieldInfo(fieldId)
        if(field!!.isEmpty) return ResponseEntity("Resource not found", HttpStatus.NOT_FOUND)
        return ResponseEntity(field, HttpStatus.OK)
    }

    /******************************************  DELETE  ******************************************/

    /*
        Delete a field
    */

    @DeleteMapping("/field/{fieldId}")
    fun deleteField(@PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any> {
        fieldService.deleteField(fieldId)
        return ResponseEntity("Field $fieldId deleted",OK)
    }

    /*
        Delete a field that belongs to a compound
    */

    @DeleteMapping("/compound/{compoundId}/field/{fieldId}")
    fun deleteFieldFromCompound(@PathVariable("compoundId") compoundId: Int,
                       @PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any?> {
        fieldService.deleteFieldFromCompound(compoundId,fieldId)
        return ResponseEntity("Field $fieldId from compound $compoundId deleted",OK)
    }

    /******************************************  POST  ******************************************/

    /* 
        Create a new field
    */

    @PostMapping("/field")
    fun createField(@RequestBody() field: Field)
            : ResponseEntity<Any> {
        val fieldKey : Int? = fieldService.createField(field)
        if (fieldKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(fieldKey,OK)
    }

    /* 
        Add a new field to a certain compound
    */

    @PostMapping("/compound/{compoundId}/field")
    fun addFieldToCompound(@PathVariable compoundId : Int, @RequestBody field: Field)
            : ResponseEntity<Any> {
        val fieldKey : Int? = fieldService.addFieldToCompound(compoundId,field)
        if (fieldKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(fieldKey, OK)
    }

    /******************************************  PUT  ******************************************/

    /*
        Accept a field
    */

    @PutMapping("/compound/{compoundId}/field/{fieldId}")
    fun acceptField(@PathVariable compoundId : Int, @PathVariable fieldId: Int)
            : ResponseEntity<Any> {
        fieldService.acceptField(compoundId, fieldId)
        return ResponseEntity("Field $fieldId accepted",OK)
    }

}