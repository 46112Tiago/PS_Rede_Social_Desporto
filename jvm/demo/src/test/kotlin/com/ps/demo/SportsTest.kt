package com.ps.demo

import com.ps.data.Sports
import com.ps.demo.sports.SportsController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus

@SpringBootTest
class SportsTest {

    @Autowired
    var sportsController: SportsController? = null

    @Test
    fun insertNewSportWithoutName(){
        val sport0 = Sports(0,null,"")
        val sportResponse0 = sportsController!!.addSport(sport0)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,sportResponse0.statusCode)
        val sport1 = Sports(0,null,"                    ")
        val sportResponse1 = sportsController!!.addSport(sport1)
        Assertions.assertEquals(HttpStatus.BAD_REQUEST,sportResponse1.statusCode)
    }

    @Test
    fun addAndDeleteSportUser(){
        val sport0 = Sports(1,null,"Football")
        val sports : List<Sports> = listOf(sport0)
        val sportResponse = sportsController!!.addUserSport("jefersonNunes",sports)
        Assertions.assertEquals(HttpStatus.OK,sportResponse.statusCode)
        sportsController!!.deleteUserSport("jefersonNunes",1)
        val getUserSport = sportsController!!.getUserSports("jefersonNunes")
        Assertions.assertEquals(true,getUserSport.body!!.isEmpty())
    }


    @Test
    fun getUserSports(){
        val sport0 = Sports(6,null,"Golf")
        val sports : List<Sports> = listOf(sport0)
        val sportResponse = sportsController!!.getUserSports("maria_duarte")
        Assertions.assertEquals(sports,sportResponse.body)
    }

    @Test
    fun getUserNotFavouriteSports(){
        val sport1 = Sports(1,null,"Football")
        val sport2 = Sports(2,null,"Basketball")
        val sport3 = Sports(3,null,"Tenis")
        val sport7 = Sports(7,null,"Surf")
        val sport8 = Sports(8,null,"Paddle(SUP)")
        val sport9 = Sports(9,null,"Skate")
        val sport10 = Sports(10,null,"BodyBoard")
        val sport11 = Sports(11,null,"Swimming")


        val sports : List<Sports> = listOf(sport2,sport10,sport1,sport8,sport9,sport7,sport11,sport3)
        val sportResponse = sportsController!!.notUserSport("joanaG")
        Assertions.assertEquals(sports,sportResponse.body)
    }

    @Test
    fun getSports(){
        val sport1 = Sports(1,null,"Football")
        val sport2 = Sports(2,null,"Basketball")
        val sport3 = Sports(3,null,"Tenis")
        val sport4 = Sports(4,null,"Padel")
        val sport5 = Sports(5,null,"Handball")
        val sport6 = Sports(6,null,"Golf")
        val sport7 = Sports(7,null,"Surf")
        val sport8 = Sports(8,null,"Paddle(SUP)")
        val sport9 = Sports(9,null,"Skate")
        val sport10 = Sports(10,null,"BodyBoard")
        val sport11 = Sports(11,null,"Swimming")


        val sports : List<Sports> = listOf(sport2,sport10,sport1,sport6,sport5,sport8,sport4,sport9,sport7,sport11,sport3)
        val sportResponse = sportsController!!.getSports()
        Assertions.assertEquals(sports,sportResponse.body)
    }


}