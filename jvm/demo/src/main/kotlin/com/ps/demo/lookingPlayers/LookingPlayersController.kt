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

    /******************************************  POST  ******************************************/

    /* 
        Make a new request for players
    */

    @PostMapping("/lookingPlayers")
    fun createRequest(@RequestBody lookingPlayers: LookingPlayers,
                      @RequestParam() email : String) : ResponseEntity<Int> {
        val creator = userService.getUserById(email)
        lookingPlayers.creator = creator
        val lookingId = lookingPlayersService.createRequest(lookingPlayers)
        return ResponseEntity(lookingId, HttpStatus.OK)
    }

    /* 
        Indicate the interest in participating
    */

    @PostMapping("/lookingPlayers/{lookingId}/participant")
    fun participateRequest(@PathVariable("lookingId") lookingId: Int,
                           @RequestParam() email : String) : ResponseEntity<String> {
        val participantId = userService.getUserById(email)!!.userId
        lookingPlayersService.participateRequest(lookingId, participantId!!)
        return ResponseEntity("Intend to participate in request $lookingId",HttpStatus.OK)
    }

    /******************************************  PUT  ******************************************/

    /* 
        Confirm a participant
    */

    @PutMapping("/lookingPlayers/{lookingId}/confirm")
    fun confirmState(@PathVariable("lookingId") lookingId: Int,
                     @RequestParam() email : String) : ResponseEntity<Any> {
        val participantId = userService.getUserById(email)!!.userId
        lookingPlayersService.confirmState(lookingId, participantId!!)
        return ResponseEntity("Request $lookingId confirmed",HttpStatus.OK)
    }

    /******************************************  DELETE  ******************************************/

    /* 
        Cancel the Request
    */

    @DeleteMapping("/lookingPlayers/{lookingId}")
    fun cancelState(@PathVariable("lookingId") lookingId: Int) : ResponseEntity<Any> {
        lookingPlayersService.cancelState(lookingId)
        return ResponseEntity("Request $lookingId canceled",HttpStatus.OK)
    }

    /******************************************  GET  ******************************************/

    /* 
        Get a certain amount of requests based on @page 
        This requests can by the pending or the accepted depending of the @state 
    */

    @GetMapping("/lookingPlayers")
    fun getLookingPlayersByState(@RequestParam() email : String,
                                 @RequestParam() state : String,
                                 @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayersList = lookingPlayersService.getLookingPlayersByState(userId!!,state,page)
        return ResponseEntity(lookingPlayersList,HttpStatus.OK)
    }

    /* 
        Get a certain amount of requests that need to be accepted based on @page 
    */

    @GetMapping("/lookingPlayers/accept")
    fun getLookingPlayersAccept(@RequestParam() email : String,
                                 @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayersList = lookingPlayersService.getLookingPlayersAccept(userId!!,page)
        return ResponseEntity(lookingPlayersList,HttpStatus.OK)
    }

    /* 
        Get the requests that user made, based on @page 
    */

    @GetMapping("/lookingPlayers/creator")
    fun getLookingCreated(@RequestParam() email : String,
                          @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val creatorId = userService.getUserById(email)!!.userId
        val lookingPlayers = lookingPlayersService.getLookingCreated(creatorId!!,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }

    /* 
        Get the requests that user are not participating or have created, based on @page 
    */

    @GetMapping("/lookingPlayers/navigate")
    fun getLookingNavigate(@RequestParam() email : String,
                          @RequestParam() page : Int): ResponseEntity<List<LookingPlayers?>> {
        val userId = userService.getUserById(email)!!.userId
        val lookingPlayers = lookingPlayersService.getLookingNavigate(userId!!,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }


}