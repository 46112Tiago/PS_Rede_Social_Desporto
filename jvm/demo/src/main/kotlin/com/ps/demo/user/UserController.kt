package com.ps.demo.user

import com.ps.data.Image
import com.ps.data.User
import org.apache.coyote.Response
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
// For simplicity of this sample, allow all origins. Real applications should configure CORS for their use case.
class UserController (val userService: UserService) {


    @GetMapping("/profile/{userName}")
    fun getUserById(@PathVariable("userName") userName : String,
                    @RequestParam() email : String
    ) : ResponseEntity<User?> {
        val user : User? = userService.getUserInfo(email)
        val friend : User? = userService.getUserInfo(userName)
        if (friend == null || user == null ) return ResponseEntity(null,NOT_FOUND)
        val isFriend : Optional<User>? = userService.isFriend(user.userId!!,friend.userId!!)
        if (isFriend!!.isPresent)
            friend.friends = listOf(isFriend.get())
        return ResponseEntity(friend,OK)
    }

    @GetMapping("/info")
    fun getUserInfo(@RequestParam() email : String) : ResponseEntity<Any> {
        val user : User = userService.getUserInfo(email) ?: return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(user, OK)
    }

    @GetMapping("/search")
    fun getUsersByName(@RequestParam() name : String,
                       @RequestParam() page : Int) : ResponseEntity<List<User?>?> {
        val user : List<User?>? = userService.getUsersByName(name,page)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @GetMapping()
    fun getUser(@RequestParam() email : String) : ResponseEntity<String> {
        val user : Optional<String>? = userService.getUser(email)
        if (user!!.isEmpty)
            return ResponseEntity("Resource not found",NOT_FOUND)
        return ResponseEntity(user.get(), OK)
    }

    @DeleteMapping()
    fun deleteUser(@RequestParam() email : String) : ResponseEntity<Any> {
        userService.deleteUser(email)
        return ResponseEntity("User account deleted",OK)
    }

    @PostMapping()
    fun createUser(@RequestBody user: User) : ResponseEntity<Any> {
        val userKey : Int = userService.insertUser(user)
        if (userKey == -1) return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(userKey, OK)
    }

    @PutMapping("/{userId}/profilePic")
    fun updateProfilePic(@RequestBody url: String,@PathVariable("userId") userId : Int) : ResponseEntity<Any?> {
        val user : User = userService.updateUserProfilePic(userId,url)
        return ResponseEntity(user, OK)
    }

    @PutMapping()
    fun editUserProfile(@RequestBody user: User,
                        @RequestParam() email : String) : ResponseEntity<Int> {
        val userId = userService.getUserById(email)!!.userId
        val id : Int = userService.editUserProfile(userId!!,user)
        return ResponseEntity(id, OK)
    }

    @PostMapping("/friend/{friendName}")
    fun addFriend( @RequestParam() email : String,
                   @PathVariable("friendName") friendName : String) : ResponseEntity<Int> {
        val user : User? = userService.getUserById(email)
        val friend : User? = userService.getUserInfo(friendName)
        val isFriend : Int = userService.addFriend(user!!.userId!!,friend!!.userId!!)
        return ResponseEntity(isFriend,OK)
    }

    @GetMapping("/friend")
    fun getFriends(@RequestParam() email : String,
                   @RequestParam() page : Int) : ResponseEntity<List<User?>> {
        val userId = userService.getUserById(email)!!.userId
        val friends : List<User?> = userService.getFriends(userId!!,page)
        return ResponseEntity.ok().body(friends)
    }

    @GetMapping("/friends")
    fun getFriendsList(@RequestParam(required = false) email : String) : ResponseEntity<List<User?>> {
        val userId = userService.getUserById(email)!!.userId
        val user : List<User?> = userService.getAllFriends(userId!!)
        return ResponseEntity.ok().body(user)
    }


    @GetMapping("/friend/request")
    fun getFriendsRequest(@RequestParam() email : String,
                          @RequestParam() page : Int) : ResponseEntity<List<User?>> {
        val userId = userService.getUserById(email)!!.userId
        val user : List<User?> = userService.getFriendsRequest(userId!!,page)
        return ResponseEntity.ok().body(user)
    }

}
