package com.ps.demo.data

import java.sql.Date

data class Event(
    val id : Int,
    val fieldId : Int,
    val startDate : Date,
    val name : String,
    val sport : String,
    val description : String,
    val participants : List<Int>
)