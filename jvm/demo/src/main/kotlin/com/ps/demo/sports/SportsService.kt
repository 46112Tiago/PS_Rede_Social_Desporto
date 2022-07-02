package com.ps.demo.sports

import com.ps.data.Sports
import com.ps.demo.removeWhitespaces
import org.springframework.stereotype.Service

@Service
class SportsService (val sportsRepo : SportsRepoImplementation) {

    fun addSport(sport : Sports) : Int? {
        //Check if the values have been introduced correctly
        val sportName =  removeWhitespaces(sport.name)
        if (sport.name.isEmpty() || sportName.isEmpty()) return -1
        return sportsRepo.addSport(sport)
    }

    fun addUserSport(userId : Int, sports : List<Sports>) : String {
        //Iterate by all the sports that the user has input, and add them as favourites
        for (sport in sports) {
            sportsRepo.addUserSport(userId, sport)
        }
        return "Sports insert"
    }

    fun deleteUserSport(userId : Int, sportId : Int) {
        return sportsRepo.deleteUserSport(userId,sportId)
    }

    fun getUserSports(userId : Int) : List<Sports> {
        return sportsRepo.getUserSports(userId)
    }

    fun notUserSport(userId : Int) : List<Sports>? {
        return sportsRepo.notUserSport(userId)
    }

    fun getSports(): List<Sports>? {
        return sportsRepo.getSports()
    }

}