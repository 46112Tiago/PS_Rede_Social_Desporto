package com.ps.demo.data

import java.sql.Blob
import java.sql.Date

data class Field(
    val id : Int,
    val compoundId : Int,
    val name : String,
    val bookings : List<Pair<Date,Int>>,
    val pictures : Blob,
)

