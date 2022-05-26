package com.ps.data

import org.springframework.boot.autoconfigure.domain.EntityScan
import java.sql.Date
import java.sql.Timestamp


data class Event(
    val id : Int?,
    val field : Field?,
    val compound : Compound?,
    val startDate : Timestamp?,
    val plannedfinishDate : Timestamp?,
    val name : String?,
    val sport : Sports?,
    val description : String?,
    val participants : List<User>?,
    val creator : User?,
    val limitParticipants : Int?
)