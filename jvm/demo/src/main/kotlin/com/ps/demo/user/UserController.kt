package com.ps.demo.user

import com.ps.data.User
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("https://localhost:3000")
// For simplicity of this sample, allow all origins. Real applications should configure CORS for their use case.
class UserController (val userRepo : UserRepoImplementation) {


    @GetMapping("/user")
    fun getUser() : ResponseEntity<List<User>?> {
        val users : List<User> = userRepo.getUser()
        return ResponseEntity.ok().body(users)
    }

    @GetMapping("/user/{user_id}")
    fun getUserById(@PathVariable("user_id") user_id : Int) : ResponseEntity<User?> {
        val user : User? = userRepo.getUserById(user_id)
        val responseHeaders = HttpHeaders()
        responseHeaders.accessControlAllowOrigin
        return ResponseEntity.ok().headers(responseHeaders).body(user)
    }

    @GetMapping("/user/email")
    fun getUserByEmail(@RequestParam(required = false) email : String) : ResponseEntity<Int?> {
        val user : Int? = userRepo.getUserByEmail(email)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @DeleteMapping("/user/{userId}")
    fun deleteUser(@PathVariable("userId") userId : Int) : ResponseEntity<Any?> {
        userRepo.deleteUser(userId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user")
    fun createUser(@RequestBody user: User) : ResponseEntity<Any?> {

        val userKey : Int = userRepo.insertUser(user)
        return ResponseEntity(userKey, HttpStatus.OK)
    }


    @PutMapping("/user/{user_id}/profilepic")
    fun updateProfilepic(@RequestBody url: String,@PathVariable("user_id") user_id : Int) : ResponseEntity<Any?> {

        val user : User = userRepo.updateUserProfilePic(user_id,url)
        return ResponseEntity(user, HttpStatus.OK)
    }
}
