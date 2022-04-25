package com.ps.demo.sports

import com.ps.data.Sports

interface SportsService {

    fun addUserSport(userId : Int, sports : List<Sports>) : Int?

    fun deleteUserSport(userId : Int, sportId : Int)

    fun getUserSports(userId : Int) : List<Sports>?

}