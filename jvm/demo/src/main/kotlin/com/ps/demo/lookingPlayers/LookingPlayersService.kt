package com.ps.demo.lookingPlayers

import com.ps.data.LookingPlayers
import org.springframework.stereotype.Service

@Service
class LookingPlayersService(val lookingPlayersRepo: LookingPlayersRepoImplementation ) {

    fun createRequest(lookingPlayers: LookingPlayers) : Int? {
        return lookingPlayersRepo.createRequest(lookingPlayers)
    }

    fun participateRequest(lookingId : Int, participantId : Int) : Int {
        return lookingPlayersRepo.participateRequest(lookingId, participantId)
    }

    fun updateState(state : String, lookingId : Int, participantId : Int) {
        return lookingPlayersRepo.updateState(state, lookingId, participantId)
    }

    fun cancelState(lookingId : Int, userId: Int) {
        return lookingPlayersRepo.cancelState(lookingId, userId)
    }

    fun getLookingPlayers(lookingId : Int, state: String) : List<LookingPlayers> {
        val lookingPlayers = lookingPlayersRepo.getLookingPlayers(lookingId,state)
        return lookingPlayers
    }

    fun getLookingCreated(creatorId: Int) : List<LookingPlayers> {
        return lookingPlayersRepo.getLookingCreated(creatorId)
    }

}