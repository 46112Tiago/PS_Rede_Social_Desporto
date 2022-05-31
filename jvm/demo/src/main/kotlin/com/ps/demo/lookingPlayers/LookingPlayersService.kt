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

    fun confirmState(lookingId : Int, participantId : Int) {
        return lookingPlayersRepo.confirmState(lookingId, participantId)
    }

    fun cancelState(lookingId : Int) {
        return lookingPlayersRepo.cancelState(lookingId)
    }

    fun getLookingPlayersByState(userId : Int, state: String, page: Int) : List<LookingPlayers?> {
        val lookingPlayers = lookingPlayersRepo.getLookingPlayersByState(userId,state,page)
        return lookingPlayers
    }

    fun getLookingCreated(creatorId: Int, page: Int) : List<LookingPlayers?> {
        return lookingPlayersRepo.getLookingCreated(creatorId, page)
    }

    fun getLookingNavigate(userId: Int, page: Int) : List<LookingPlayers?> {
        val notParticipating = lookingPlayersRepo.getLookingNotParticipating(userId,page)
        if (notParticipating!!.isEmpty()) return listOf()
        val navigate = mutableListOf<LookingPlayers>()
        for (looking in notParticipating){
            navigate.add(lookingPlayersRepo.getLookingNavigate(looking.id!!)[0]!!)
        }
        return navigate
    }

    fun getLookingPlayersAccept(userId: Int, page: Int) : List<LookingPlayers?> {
        return lookingPlayersRepo.getLookingPlayersAccept(userId, page)
    }

}