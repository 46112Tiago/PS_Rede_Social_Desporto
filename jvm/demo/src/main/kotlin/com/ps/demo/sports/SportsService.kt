package com.ps.demo.sports

import com.ps.data.Sports

interface SportsService {

    fun addSport(sports : List<Sports>) : MutableList<Int>?

    fun addUserSport(userId : Int, sports : List<Sports>)

    fun deleteUserSport(userId : Int, sportId : Int)

    fun getUserSports(userId : Int) : List<Sports>?

    fun getSports(): List<Sports>?

}