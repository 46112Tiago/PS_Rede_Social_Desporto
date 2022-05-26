package com.ps.demo.sports

import com.ps.data.Sports
import org.springframework.stereotype.Service

@Service
class SportsService (val sportsRepo : SportsRepoImplementation) {

    fun addSport(sports : List<Sports>) : MutableList<Int>? {
        return sportsRepo.addSport(sports)
    }

    fun addUserSport(userId : Int, sports : List<Sports>) {
        return sportsRepo.addUserSport(userId,sports)
    }

    fun deleteUserSport(userId : Int, sportId : Int) {
        return sportsRepo.deleteUserSport(userId,sportId)
    }

    fun getUserSports(userId : Int) : List<Sports>? {
        return sportsRepo.getUserSports(userId)
    }

    fun getSports(): List<Sports>? {
        return sportsRepo.getSports()
    }

}