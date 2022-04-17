package com.ps.data

import org.springframework.boot.autoconfigure.domain.EntityScan
import java.sql.Date


@EntityScan
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