package com.ps.demo

import com.ps.data.Sports
import com.ps.data.User
import com.ps.demo.user.UserController
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import java.time.LocalDate

@SpringBootTest
class UserTest {

    @Autowired
    var userController: UserController? = null

    @Test
    fun getUsersByName(){
        val usersName = userController!!.getUsersByName("Marco",0)
        val sports = listOf<Sports>()
        val user = User(null,"Marco","Duarte",null,null,null,
            "projeto.seminario2022@gmail.com",null,null,sports,null)
        val users = listOf<User>(user)
        Assertions.assertEquals(users,usersName.body)
    }

    @Test
    fun getUsersByNameWithoutName(){
        val usersName = userController!!.getUsersByName("",0)
        Assertions.assertEquals(true,usersName.body.isNullOrEmpty())
    }

    @Test
    fun getUsersByNameWithOnlyWhitespace(){
        val usersName = userController!!.getUsersByName("               ",0)
        Assertions.assertEquals(true,usersName.body.isNullOrEmpty())
    }

    @Test
    fun createWithoutValuesUser(){

        var user = User(null,"","A","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gamil.com",false,"masculine",null,null)
        var userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"          ","A","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","              ","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","       ", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"          ",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"test@gmail.com",false,"               ",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

        user = User(null,"T","A","Lisboa", null,
            null,"test@gmail.com",false,"masculine",null,null)
        userResponse = userController!!.createUser(user)

        Assertions.assertEquals(HttpStatus.BAD_REQUEST,userResponse.statusCode)

    }

    @Test
    fun createDeleteUser(){

        val user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"testUser1@gmail.com",false,"masculine",null,null)
        val userResponse = userController!!.createUser(user)
        var getUserInfo = userController!!.getUserInfo("testUser1")

        Assertions.assertNotNull(getUserInfo.body)

        userController!!.deleteUser("testUser1@gmail.com")

        val getUser = userController!!.getUser("testUser1")

        Assertions.assertNull(getUser.body)

    }

    @Test
    fun checkFriendsRequest(){
        val user = User(null,"T","A","Lisboa", LocalDate.of(2000,9,11),
            null,"testUser1@gmail.com",false,"masculine",null,null)
        val userResponse = userController!!.createUser(user)

        var getFriendsRequestBeforeRequest = userController!!.getFriendsRequest("joanaG",0)

        userController!!.addFriend("testUser1","joanaG")

        var getFriendsRequestAfterRequest = userController!!.getFriendsRequest("joanaG",0)

        Assertions.assertEquals(getFriendsRequestBeforeRequest.body!!.size+1,
            getFriendsRequestAfterRequest.body!!.size)

        userController!!.addFriend("testUser1","joanaG")

        val getFriendsRequestAfterAccept = userController!!.getFriendsRequest("testUser1",0)

        Assertions.assertEquals(getFriendsRequestBeforeRequest.body!!,
            getFriendsRequestAfterAccept.body!!)

        userController!!.deleteUser("testUser1@gmail.com")

    }

}