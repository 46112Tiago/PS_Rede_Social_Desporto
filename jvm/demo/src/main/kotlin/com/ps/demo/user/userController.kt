package com.ps.demo.user

import com.ps.data.Test
import com.ps.data.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp
import java.text.SimpleDateFormat

@RestController
@RequestMapping
class UserController @Autowired constructor (val userRepo : UserRepoImplementation) {


    @GetMapping("/users")
    fun getUser() : ResponseEntity<User?> {
        val users : List<User> = userRepo.getUser()
        return ResponseEntity(users[0], HttpStatus.OK)
    }

    @GetMapping("/user/{userId}")
    fun getUserById(@PathVariable("userId") userId : Int) : ResponseEntity<User?> {
        val user : User? = userRepo.getUserById(userId)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @DeleteMapping("/user/{userId}")
    fun deleteUser(@PathVariable("userId") userId : Int) : ResponseEntity<Any?> {
        userRepo.deleteUser(userId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user")
    fun createUser() : ResponseEntity<Any?> {
        val sdf = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS")

        val user = User(
            null,
            "Diogo2",
            "Fernandes2",
            "Lisboa",
            Timestamp(sdf.parse("2000-06-03T13:30:00.000").time),
            null,
            "diogotag@gmail.com",
            true,
            "Male"
        )
        val userKey : Int = userRepo.insertUser(user)
        return ResponseEntity(userKey, HttpStatus.OK)
    }
}
