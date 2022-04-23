package com.ps.demo.sports

import com.ps.data.Review
import com.ps.data.Sports
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user/{userId}")
class SportsController(val sportsRepo : SportsRepoImplementation) {

    @GetMapping
    fun getUserSports(@PathVariable("userId") userId : Int) : ResponseEntity<List<Sports>?> {
        val sports : List<Sports>? = sportsRepo.getUserSports(userId)
        return ResponseEntity(sports, HttpStatus.OK)
    }

    @DeleteMapping("/sports/{sportsId}")
    fun deleteUserSport(@PathVariable("userId") userId : Int,
                        @PathVariable("sportsId") sportsId : Int) : ResponseEntity<Any?> {
        sportsRepo.deleteUserSport(userId,sportsId)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping
    fun addUserSport(@PathVariable("userId") userId : Int,
                             @RequestBody sports : Sports)
            : ResponseEntity<Any?> {
        val sportsKey : Int? = sportsRepo.addUserSport(userId,sports)
        return ResponseEntity(sportsKey, HttpStatus.OK)
    }

}