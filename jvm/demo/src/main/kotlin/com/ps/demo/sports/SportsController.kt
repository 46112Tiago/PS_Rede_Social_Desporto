package com.ps.demo.sports

import com.ps.data.Sports
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping()
@CrossOrigin("\${cors}")
class SportsController(val sportsService: SportsService, val userService: UserService) {

    /******************************************  GET  ******************************************/

/* 
    Get all sports available in the application
*/

    @GetMapping("/sports")
    fun getSports() : ResponseEntity<List<Sports>?> {
        val sports : List<Sports>? = sportsService.getSports()
        return ResponseEntity(sports, HttpStatus.OK)
    }

/* 
    Get all the favourite sports of a user
*/

    @GetMapping("/user/sports")
    fun getUserSports(@RequestParam() email : String) : ResponseEntity<List<Sports>> {
        val user = userService.getUserById(email)
        val sports : List<Sports> = sportsService.getUserSports(user!!.userId!!)
        return ResponseEntity(sports, HttpStatus.OK)
    }

/* 
    Get all the sports that are not part of the list of favourites based on the user
*/

    @GetMapping("/user/not/sports")
    fun notUserSport(@RequestParam() email : String)
            : ResponseEntity<Any> {
        val userId = userService.getUserById(email)!!.userId
        val sportsKey = sportsService.notUserSport(userId!!)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }    

    /******************************************  DELETE  ******************************************/

    /* 
        Remove a sport as favourite
    */

    @DeleteMapping("/user/sports/{sportsId}")
    fun deleteUserSport(@RequestParam() email : String,
                        @PathVariable("sportsId") sportsId : Int) : ResponseEntity<Any> {
        val user = userService.getUserById(email)
        sportsService.deleteUserSport(user!!.userId!!,sportsId)
        return ResponseEntity("Sport with id $sportsId deleted",HttpStatus.OK)
    }

    /******************************************  POST  ******************************************/

    /* 
        Add a sport as a favourite
    */

    @PostMapping("/user/sports")
    fun addUserSport(@RequestParam() email : String,
                     @RequestBody sports : List<Sports>)
            : ResponseEntity<String> {
        val userId = userService.getUserById(email)!!.userId
        val sportsKey = sportsService.addUserSport(userId!!,sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

    /* 
        Add a new sport
    */

    @PostMapping("/sport")
    fun addSport(@RequestBody sport : Sports)
            : ResponseEntity<Any> {
        val sportsKey : Int? = sportsService.addSport(sport)
        if (sportsKey == -1)
            return ResponseEntity("Bad request",BAD_REQUEST)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

}