package com.ps.demo.field

import com.ps.data.Compound
import com.ps.data.Field
import org.antlr.v4.runtime.misc.Pair
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
class FieldController(val fieldRepo : FieldRepoImplementation) {

    @GetMapping("/compound/{compoundId}/field")
    fun getAllFields(@PathVariable("compoundId") compoundId: Int) : ResponseEntity<List<Field>?> {
        val fields : List<Field>? = fieldRepo.getAllFields(compoundId)
        return ResponseEntity(fields, HttpStatus.OK)
    }

    @GetMapping("/compound/{compoundId}/field/{fieldId}")
    fun getFieldInfo(@PathVariable("fieldId") fieldId : Int) : ResponseEntity<Field?> {
        val field : Field? = fieldRepo.getFieldInfo(fieldId)
        return ResponseEntity(field, HttpStatus.OK)
    }

    @DeleteMapping("/field/{fieldId}")
    fun deleteField(@PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any?> {
        fieldRepo.deleteField(fieldId)
        return ResponseEntity(HttpStatus.OK)
    }

    @DeleteMapping("/compound/{compoundId}/field/{fieldId}")
    fun deleteFieldFromCompound(@PathVariable("compoundId") compoundId: Int,
                       @PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any?> {
        fieldRepo.deleteFieldFromCompound(compoundId,fieldId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/field")
    fun createField(@RequestBody() field: Field)
            : ResponseEntity<Any?> {
        val fieldKey : Int? = fieldRepo.createField(field)
        return ResponseEntity(fieldKey, HttpStatus.OK)
    }

    @PostMapping("/compound/{compoundId}/field")
    fun addFieldToCompound(@PathVariable compoundId : Int, @RequestBody field: Field)
            : ResponseEntity<Any?> {
        val fieldKey : Int? = fieldRepo.addFieldToCompound(compoundId,field)
        return ResponseEntity(fieldKey, HttpStatus.OK)
    }

    @PutMapping("/compound/{compoundId}/field/{fieldId}")
    fun acceptField(@PathVariable compoundId : Int, @PathVariable fieldId: Int)
            : ResponseEntity<Any?> {
        fieldRepo.acceptField(compoundId, fieldId)
        return ResponseEntity(HttpStatus.OK)
    }

}