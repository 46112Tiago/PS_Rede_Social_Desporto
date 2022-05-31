package com.ps.data

import java.sql.Time

data class Schedule(
        val id : Int?,
        val weekday : String?,
        val openingHour : Time?,
        val closingHour : Time?,
        val optionalDescription : String? = ""
)
