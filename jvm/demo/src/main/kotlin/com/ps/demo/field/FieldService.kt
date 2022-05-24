package com.ps.demo.field

import com.ps.data.Field
import java.util.*
import org.springframework.stereotype.Service

@Service
class FieldService(val fieldRepo: FieldRepoImplementation) {

    fun createField(field: Field) : Int? {
        return fieldRepo.createField(field)
    }

    fun addFieldToCompound(compoundId: Int, field: Field) : Int? {
        return fieldRepo.addFieldToCompound(compoundId,field)
    }

    fun deleteField(fieldId : Int) {
        return fieldRepo.deleteField(fieldId)
    }

    fun deleteFieldFromCompound(compoundId: Int,fieldId : Int) {
        return fieldRepo.deleteFieldFromCompound(compoundId,fieldId)
    }

    fun getAllFields(compoundId : Int) : List<Field>? {
        return fieldRepo.getAllFields(compoundId)
    }

    fun getFieldInfo(fieldId : Int) : Optional<Field>? {
        return fieldRepo.getFieldInfo(fieldId)
    }

    fun acceptField(compoundId: Int,fieldId: Int) {
        return fieldRepo.acceptField(compoundId,fieldId)
    }

}