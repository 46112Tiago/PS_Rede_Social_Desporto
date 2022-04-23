package com.ps.demo.field

import com.ps.data.Compound
import com.ps.data.Field

interface FieldService {

    fun createField(compound : Compound, field: Field) : Int?

    fun deleteField(compoundId: Int,fieldId : Int)

    fun getAllFields(compoundId : Int) : List<Field>?

    fun getFieldInfo(fieldId : Int) : Field?

}