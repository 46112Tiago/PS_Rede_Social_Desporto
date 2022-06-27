package com.ps.demo

import com.ps.data.*
import com.ps.demo.compound.CompoundController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.postgresql.geometric.PGpoint
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import java.time.LocalTime

@SpringBootTest
class CompoundTest {

    @Autowired
    var compoundControl: CompoundController? = null

    @Test
    fun zoomSmallerThanTwelve(){
        val emptyList = compoundControl!!.getLocations(10,0.0,0.0)
        Assertions.assertEquals(true,emptyList.body!!.isEmpty())
    }

    @Test
    fun addDeleteCompound(){
        val getCompoundsBeforeInsert = compoundControl!!.getLocations(14,0.0,0.0)
        val compound = Compound(null,"Compound","912222222","Description","Summary",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)
        val compoundResponse = compoundControl!!.createCompound(compound).body as Int
        compoundControl!!.acceptCompound(compoundResponse)
        val getCompoundsAfterInsert = compoundControl!!.getLocations(14,0.0,0.0)
        Assertions.assertEquals(getCompoundsBeforeInsert.body!!.size+1,getCompoundsAfterInsert.body!!.size)
        compoundControl!!.deleteCompound(compoundResponse)
        val getCompoundsAfterDelete = compoundControl!!.getLocations(14,0.0,0.0)
        Assertions.assertEquals(getCompoundsBeforeInsert.body!!,getCompoundsAfterDelete.body!!)
    }

    @Test
    fun compoundSummaryTooLong(){
        val compound = Compound(null,"Compound","912222222","Description","Test summary with too many characters." +
                "Test summary with too many characters.Test summary with too many characters.Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundSummaryWithoutCharacters(){
        val compound = Compound(null,"Compound","912222222","Description","",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundSummaryWithOnlyWhitespace(){
        val compound = Compound(null,"Compound","912222222","Description","                 ",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundNameTooLong(){
        val compound = Compound(null,"Test name with too many characters.Test name with too many characters.Test name with too many characters.Test name with too many characters.",
            "912222222","Description","Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundNameWithoutCharacters(){
        val compound = Compound(null,"","912222222","Description","Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundNameWithOnlyWhitespace(){
        val compound = Compound(null,"                  ","912222222","Description","Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundDescriptionWithoutCharacters(){
        val compound = Compound(null,"Compound","912222222","","Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

    @Test
    fun compoundDescriptionWithOnlyWhitespace(){
        val compound = Compound(null,"Compound","912222222","                ","Test summary with too many characters.",
            null, PGpoint(0.0,0.0),
            listOf(Sports(1,null,"")),
            listOf(Material(1,null,null)),
            listOf(Schedule(null,"Sun", LocalTime.now(),LocalTime.now())),
            listOf(Field(null,null,"Field",null,false)),'M',true,null)

        val eventResponse = compoundControl!!.createCompound(compound)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,eventResponse.statusCode)
    }

}