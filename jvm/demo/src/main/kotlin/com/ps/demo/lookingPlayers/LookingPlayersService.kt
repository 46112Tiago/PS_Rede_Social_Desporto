package com.ps.demo.lookingPlayers

import com.ps.data.LookingPlayers

interface LookingPlayersService {

    fun createRequest(lookingPlayers: LookingPlayers) : Int?

    fun participateRequest(lookingId : Int, participantId : Int) : Int

    fun updateState(state : String, lookingId : Int, participantId : Int)

    fun cancelState(lookingId : Int, userId: Int)

    fun getLookingPlayers(lookingId : Int, state: String) : List<LookingPlayers>

    fun getLookingCreated(cretaorId: Int) : List<LookingPlayers>

}