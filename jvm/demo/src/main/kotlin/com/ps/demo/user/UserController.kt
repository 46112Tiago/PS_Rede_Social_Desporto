package com.ps.demo.user

import com.ps.data.User
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
@CrossOrigin("https://localhost:3000")
// For simplicity of this sample, allow all origins. Real applications should configure CORS for their use case.
class UserController (val userRepo : UserRepoImplementation) {


    @GetMapping("/{userId}")
    fun getUserById(@PathVariable("userId") user_id : Int) : ResponseEntity<User?> {
        val user : User? = userRepo.getUserById(user_id)
        val responseHeaders = HttpHeaders()
        responseHeaders.accessControlAllowOrigin
        return ResponseEntity.ok().headers(responseHeaders).body(user)
    }

    @GetMapping()
    fun getUser(@RequestParam(required = false) email : String) : ResponseEntity<Int?> {
        val user : Int? = userRepo.getUser(email)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @DeleteMapping("/{userId}")
    fun deleteUser(@PathVariable("userId") userId : Int) : ResponseEntity<Any?> {
        userRepo.deleteUser(userId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping()
    fun createUser(@RequestBody user: User) : ResponseEntity<Any?> {
        val userKey : Int = userRepo.insertUser(user)
        return ResponseEntity(userKey, HttpStatus.OK)
    }

    @PutMapping("/{userId}/profilePic")
    fun updateProfilePic(@RequestBody url: String,@PathVariable("userId") userId : Int) : ResponseEntity<Any?> {
        val user : User = userRepo.updateUserProfilePic(userId,url)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @PutMapping("/{userId}")
    fun editUserProfile(@RequestBody user: User, @PathVariable("userId") userId : Int) : ResponseEntity<Int> {
        val id : Int = userRepo.editUserProfile(userId,user)
        return ResponseEntity(id, HttpStatus.OK)
    }

    @PostMapping("/{userId}/friend/{friendId}")
    fun addFriend(@PathVariable("userId") userId : Int, @PathVariable("friendId") friendId : Int) : ResponseEntity<Int> {
        val idFriend : Int = userRepo.addFriend(userId,friendId)
        return ResponseEntity(idFriend,HttpStatus.OK)
    }

    @GetMapping("/{user_id}/friend")
    fun getFriends(@PathVariable("userId") userId : Int) : ResponseEntity<List<User?>> {
        val user : List<User?> = userRepo.getFriends(userId)
        return ResponseEntity.ok().body(user)
    }
}
