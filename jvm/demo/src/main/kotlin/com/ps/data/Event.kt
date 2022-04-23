package com.ps.data

import org.springframework.boot.autoconfigure.domain.EntityScan
import java.sql.Date
import java.sql.Timestamp


@EntityScan
data class Event(
    val id : Int?,
    val field : Field?,
    val startDate : Timestamp?,
    val plannedfinishDate : Timestamp?,
    val name : String?,
    val sport : String?,
    val description : String?,
    val participants : List<User>?,
    val creator : User?,
    val limitParticipants : Int?
)