package com.ps.demo.field

import com.ps.data.Compound
import com.ps.data.Field

interface FieldService {

    fun createField(field: Field) : Int?

    fun addFieldToCompound(compoundId: Int, field: Field) : Int?

    fun deleteField(fieldId : Int)

    fun deleteFieldFromCompound(compoundId: Int,fieldId : Int)

    fun getAllFields(compoundId : Int) : List<Field>?

    fun getFieldInfo(fieldId : Int) : Field?

    fun acceptField(compoundId: Int,fieldId: Int)

}