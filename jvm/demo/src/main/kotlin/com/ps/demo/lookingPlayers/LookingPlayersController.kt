package com.ps.demo.lookingPlayers

import com.ps.data.LookingPlayers
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
@CrossOrigin("https://localhost:3000")
class LookingPlayersController(val lookingPlayersService: LookingPlayersService) {
    @PostMapping("/lookingPlayers")
    fun createRequest(@RequestBody lookingPlayers: LookingPlayers) : ResponseEntity<Int> {
        val lookingId = lookingPlayersService.createRequest(lookingPlayers)
        return ResponseEntity(lookingId, HttpStatus.OK)
    }

    @PostMapping("/lookingPlayers/{lookingId}/participant/{participantId}")
    fun participateRequest(@PathVariable("lookingId") lookingId: Int,
                           @PathVariable("participantId") participantId: Int) : ResponseEntity<Int> {
        val lookingId = lookingPlayersService.participateRequest(lookingId, participantId)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @PutMapping("/lookingPlayers/{lookingId}/participant/{participantId}")
    fun updateState(@RequestBody lookingPlayers: LookingPlayers,
                    @PathVariable("lookingId") lookingId: Int,
                    @PathVariable("participantId") participantId: Int) : ResponseEntity<Any> {
        lookingPlayersService.updateState(lookingPlayers.state!!,lookingId, participantId)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @DeleteMapping("/lookingPlayers/{lookingId}/participant/{participantId}")
    fun cancelState(@PathVariable("lookingId") lookingId: Int,
                    @PathVariable("participantId") participantId: Int) : ResponseEntity<Any> {
        lookingPlayersService.cancelState(lookingId, participantId)
        return ResponseEntity(lookingId,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers/{userId}")
    fun getLookingPlayersByState(@PathVariable("userId") userId: Int,
                                 @RequestParam(required = false) state : String,
                                 @RequestParam(required = false) page : Int): ResponseEntity<List<LookingPlayers?>> {
        val lookingPlayersList = lookingPlayersService.getLookingPlayersByState(userId,state,page)
        return ResponseEntity(lookingPlayersList,HttpStatus.OK)    }

    @GetMapping("/lookingPlayers/creator/{creatorId}")
    fun getLookingCreated(@PathVariable("creatorId") creatorId: Int,
                          @RequestParam(required = false) page : Int): ResponseEntity<List<LookingPlayers?>> {
        val lookingPlayers = lookingPlayersService.getLookingCreated(creatorId,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }

    @GetMapping("/lookingPlayers/navigate/{userId}")
    fun getLookingNavigate(@PathVariable("userId") userId: Int,
                          @RequestParam(required = false) page : Int): ResponseEntity<List<LookingPlayers?>> {
        val lookingPlayers = lookingPlayersService.getLookingNavigate(userId,page)
        return ResponseEntity(lookingPlayers,HttpStatus.OK)
    }


}