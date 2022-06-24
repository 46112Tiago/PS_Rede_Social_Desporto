package com.ps.demo

import com.ps.data.Compound
import com.ps.data.Field
import com.ps.demo.field.FieldController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus

@SpringBootTest
class FieldTest {

    @Autowired
    var fieldController: FieldController? = null

    @Test
    fun checkNameWithoutCharacters() {
        val field1 = Field(null,null,"",null,false)
        val field1Response = fieldController!!.addFieldToCompound(1,field1)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,field1Response.statusCode)
    }

    @Test
    fun checkNameWithTooManyCharacters() {
        val field1 = Field(null,null,"Test with field nwith more than 100 characters.Test with field nwith more than 100 characters.Test with field nwith more than 100 characters.",null,false)
        val field1Response = fieldController!!.addFieldToCompound(1,field1)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,field1Response.statusCode)
    }

    @Test
    fun checkNameWithOnlyWhitespaces() {
        val field1 = Field(null,null,"                  ",null,false)
        val field1Response = fieldController!!.addFieldToCompound(1,field1)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,field1Response.statusCode)
    }

    @Test
    fun addAndRemoveFieldsInCompound() {
        val fieldsBeforeInsert = fieldController!!.getAllFields(1)
        val field1 = Field(null,null,"Field 1",null,false)
        val field2 = Field(null,null,"Field 2",null,false)

        val field1Response = fieldController!!.addFieldToCompound(1,field1)
        val field2Response = fieldController!!.addFieldToCompound(1,field2)

        fieldController!!.acceptField(1,field1Response.body!!)
        fieldController!!.acceptField(1,field2Response.body!!)

        val fieldsAfterInsert = fieldController!!.getAllFields(1)

        Assertions.assertEquals(fieldsBeforeInsert.body!!.size+2,fieldsAfterInsert.body!!.size)

        fieldController!!.deleteFieldFromCompound(1,field1Response.body!!)
        fieldController!!.deleteFieldFromCompound(1,field2Response.body!!)

        val fieldsAfterDelete = fieldController!!.getAllFields(1)

        Assertions.assertEquals(fieldsBeforeInsert.body,fieldsAfterDelete.body)


    }

}