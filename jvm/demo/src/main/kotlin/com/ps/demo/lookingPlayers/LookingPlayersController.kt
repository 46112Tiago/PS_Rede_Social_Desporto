package com.ps.demo.lookingPlayers

import com.ps.data.LookingPlayers
import com.ps.demo.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class LookingPlayersController(val lookingPlayersService: LookingPlayersService,val userService: UserService) {

    @PostMapping("/lookingPlayers")
    fun createRequest(@RequestBody lookingPlayers: LookingPlayers,
                      @RequestParam() email : String) : ResponseEntity<Int> {
        val creator = userService.getUserById(email)
        lookingPlayers.creator = creator
        val lookingId = lookingPlayersService.createRequest(lookingPlayers)
        return ResponseEntity(lookingId, HttpStatus.OK)
    }

    @PostMapping("/lookingPlayers/{lookingId}/participant")
    fun participateRequest(@PathVariable("lookingId") lookingId: Int,
                           @RequestParam() email : String) : ResponseEntity<Int> {
        val participantId = userService.getUserById(email)!!.userId
        val lookingId = lookingPlayersService.participateRequest(lookingId, participantId!!)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @PutMapping("/lookingPlayers/{lookingId}/confirm")
    fun confirmState(@PathVariable("lookingId") lookingId: Int,
                     @RequestParam() email : String) : ResponseEntity<Any> {
        val participantId = userService.getUserById(email)!!.userId
        lookingPlayersService.confirmState(lookingId, participantId!!)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @DeleteMapping("/lookingPlayers/{lookingId}")
    fun cancelState(@PathVariable("lookingId") lookingId: Int) : ResponseEntity<Any> {
        lookingPlayersService.cancelState(lookingId)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers")
    fun getLookingPlayersByState(@RequestParam() email : String,
                                 @RequestParam() state : String,
                                 @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayersList = lookingPlayersService.getLookingPlayersByState(userId!!,state,page)
        return ResponseEntity(lookingPlayersList,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers/accept")
    fun getLookingPlayersAccept(@RequestParam() email : String,
                                 @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayersList = lookingPlayersService.getLookingPlayersAccept(userId!!,page)
        return ResponseEntity(lookingPlayersList,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers/creator")
    fun getLookingCreated(@RequestParam() email : String,
                          @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val creatorId = userService.getUserById(email)!!.userId
        val lookingPlayers = lookingPlayersService.getLookingCreated(creatorId!!,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers/navigate")
    fun getLookingNavigate(@RequestParam() email : String,
                          @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayers = lookingPlayersService.getLookingNavigate(userId!!,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }


}