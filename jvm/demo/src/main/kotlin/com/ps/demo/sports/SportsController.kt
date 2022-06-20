package com.ps.demo.sports

import com.ps.data.Sports
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping()
@CrossOrigin("http://localhost:3000")
class SportsController(val sportsService: SportsService, val userService: UserService) {

    @GetMapping("/sports")
    fun getSports() : ResponseEntity<List<Sports>?> {
        val sports : List<Sports>? = sportsService.getSports()
        return ResponseEntity(sports, HttpStatus.OK)
    }

    @GetMapping("/user/sports")
    fun getUserSports(@RequestParam(required = false) email : String) : ResponseEntity<List<Sports>?> {
        val user = userService.getUserById(email)
        val sports : List<Sports>? = sportsService.getUserSports(user!!.userId!!)
        return ResponseEntity(sports, HttpStatus.OK)
    }

    @DeleteMapping("/user/sports/{sportsId}")
    fun deleteUserSport(@RequestParam(required = false) email : String,
                        @PathVariable("sportsId") sportsId : Int) : ResponseEntity<Any?> {
        val user = userService.getUserById(email)
        sportsService.deleteUserSport(user!!.userId!!,sportsId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/sports")
    fun addUserSport(@PathVariable("userId") userId : Int,
                             @RequestBody sports : List<Sports>)
            : ResponseEntity<Any?> {
        val sportsKey = sportsService.addUserSport(userId,sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

    @PostMapping("/sports")
    fun addSport(@RequestBody sports : List<Sports>)
            : ResponseEntity<Any?> {
        val sportsKey : MutableList<Int>? = sportsService.addSport(sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

}