package com.ps.demo.lookingPlayers

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
class LookingPlayersController(val lookingPlayersRepoImplementation: LookingPlayersRepoImplementation) {
}