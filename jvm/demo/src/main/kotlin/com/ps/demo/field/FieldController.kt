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

    @GetMapping("/compound/{compoundId}/fields")
    fun getAllFields(@PathVariable("compoundId") compoundId: Int) : ResponseEntity<List<Field>?> {
        val fields : List<Field>? = fieldRepo.getAllFields(compoundId)
        return ResponseEntity(fields, HttpStatus.OK)
    }

    @GetMapping("/compound/{compoundId}/field/{fieldId}")
    fun getCompoundInfo(@PathVariable("fieldId") fieldId : Int) : ResponseEntity<Field?> {
        val field : Field? = fieldRepo.getFieldInfo(fieldId)
        return ResponseEntity(field, HttpStatus.OK)
    }

    @DeleteMapping("/compound/{compoundId}/field/{fieldId}")
    fun deleteCompound(@PathVariable("compoundId") compoundId: Int,
                       @PathVariable("fieldId") fieldId : Int) : ResponseEntity<Any?> {
        fieldRepo.deleteField(compoundId,fieldId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/field")
    fun createField(@RequestBody compound : Compound, @RequestBody field: Field)
            : ResponseEntity<Any?> {
        val fieldKey : Int? = fieldRepo.createField(compound,field)
        return ResponseEntity(fieldKey, HttpStatus.OK)
    }

}