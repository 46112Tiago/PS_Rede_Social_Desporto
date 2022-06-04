package com.ps.data

import java.sql.Time
import java.sql.Timestamp

data class Schedule(
        val id : Int?,
        val weekday : String?,
        val openingHour : Timestamp?,
        val closingHour : Timestamp?,
        val optionalDescription : String? = ""
)
