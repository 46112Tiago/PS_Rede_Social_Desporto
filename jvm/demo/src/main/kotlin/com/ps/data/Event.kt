package com.ps.data

import org.springframework.boot.autoconfigure.domain.EntityScan
import java.sql.Date
import java.sql.Timestamp
import java.time.LocalDateTime


data class Event(
    val id : Int?,
    var field : Field?,
    var compound : Compound?,
    val startDate : LocalDateTime?,
    val plannedfinishDate : LocalDateTime?,
    val name : String?,
    var sport : Sports?,
    val description : String?,
    val summary : String?,
    var participants : List<User>?,
    var creator : User?,
    val limitParticipants : Int?
)