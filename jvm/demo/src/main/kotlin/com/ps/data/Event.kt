package com.ps.demo.data

import java.sql.Date

data class Event(
    val id : Int,
    val field : Field,
    val startDate : Date,
    val name : String,
    val sport : String,
    val description : String,
    val participants : List<User>,
    val limitParticipants : Int
)