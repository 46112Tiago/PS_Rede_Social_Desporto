package com.ps.demo.sports

import com.ps.data.Sports
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping()
class SportsController(val sportsRepo : SportsRepoImplementation) {

    @GetMapping("/sports")
    fun getSports() : ResponseEntity<List<Sports>?> {
        val sports : List<Sports>? = sportsRepo.getSports()
        return ResponseEntity(sports, HttpStatus.OK)
    }

    @GetMapping("/user/{userId}/sports")
    fun getUserSports(@PathVariable("userId") userId : Int) : ResponseEntity<List<Sports>?> {
        val sports : List<Sports>? = sportsRepo.getUserSports(userId)
        return ResponseEntity(sports, HttpStatus.OK)
    }

    @DeleteMapping("/user/{userId}/sports/{sportsId}")
    fun deleteUserSport(@PathVariable("userId") userId : Int,
                        @PathVariable("sportsId") sportsId : Int) : ResponseEntity<Any?> {
        sportsRepo.deleteUserSport(userId,sportsId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/user/{userId}/sports")
    fun addUserSport(@PathVariable("userId") userId : Int,
                             @RequestBody sports : List<Sports>)
            : ResponseEntity<Any?> {
        val sportsKey = sportsRepo.addUserSport(userId,sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

    @PostMapping("/sports")
    fun addSport(@RequestBody sports : List<Sports>)
            : ResponseEntity<Any?> {
        val sportsKey : MutableList<Int>? = sportsRepo.addSport(sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

}