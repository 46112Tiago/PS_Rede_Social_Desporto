package com.ps.data

import org.springframework.boot.autoconfigure.domain.EntityScan
import java.sql.Date
import java.sql.Timestamp


data class Event(
    val id : Int?,
    var field : Field?,
    var compound : Compound?,
    val startDate : Timestamp?,
    val plannedfinishDate : Timestamp?,
    val name : String?,
    var sport : Sports?,
    val description : String?,
    val summary : String?,
    var participants : List<User>?,
    var creator : User?,
    val limitParticipants : Int?
)